import { Router, Response, Request } from 'express'
import dotenv from 'dotenv'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../../../docs/swagger.json'
import ToxicologicalSampleFactory from '../../../domain/toxicological-sample/factory/toxicologicalSample.factory'
import connection from '../../../config/sequelize'
import Auth from './middlewares/auth'
import UserFactory from '../../../domain/user/factory/user.factory'
import ErrorMessage from '../../../utils/error-messages'

dotenv.config()

export default class Server {
  private _app = express()
  private _route = Router()

  constructor() {
    this._app.use(express.json())
    this._app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

    this.routes()
  }

  private routes(): void {
    this._route.get('/', (_, res: Response) => {
      res.json({ message: 'Hello from Synvia!' })
    })

    this._route.get('/toxicological-sample', Auth.auth, async (_, res: Response) => {
      try {
        const toxicologicalSampleFactory = await ToxicologicalSampleFactory.findAll()

        res.status(200).json(toxicologicalSampleFactory)
      } catch (error) {
        res.status(500).send({ message: ErrorMessage.server['0001'] })
      }
    })

    this._route.get('/toxicological-sample/:sampleCode', Auth.auth, async (req: Request, res: Response) => {
      try {
        const { sampleCode } = req.params

        const toxicologicalSampleFactory = await ToxicologicalSampleFactory.findBySampleCode(sampleCode)
      
        res.status(200).json(toxicologicalSampleFactory)
      } catch (error) {
        res.status(500).send({ message: ErrorMessage.server['0001'] })
      }
    })

    this._route.post('/toxicological-sample', Auth.auth, (req: Request, res: Response) => {
      try {
        const { sampleCode, ...rest } = req.body
      
        const toxicologicalSampleFactory = ToxicologicalSampleFactory.create(sampleCode, rest)
        res.status(200).json(toxicologicalSampleFactory)
      } catch (error) {
        res.status(500).send({ message: ErrorMessage.server['0001'] })
      }
    })
    
    this._route.post('/create-account', (req: Request, res: Response) => {
      try {
        const { email, password } = req.body
      
        const userFactory = UserFactory.create(email, password)
        res.status(200).json(userFactory)
      } catch (error) {
        res.status(500).send({ message: ErrorMessage.server['0001'] })
      }
    })

    this._route.post('/login', async (req: Request, res: Response) => {
      try {
        const { email, password } = req.body
      
        const userFactory = await UserFactory.login(email, password)
        res.status(200).json(userFactory)
      } catch (error) {
        res.status(500).send({ message: ErrorMessage.server['0001'] })
      }
    })

    this._app.use(this._route)
  }

  async start(): Promise<void> {
    await connection.sync()
    const port = process.env.PORT
    this._app.listen(port, () => console.info(`Server running on port ${port}`))
  }
}