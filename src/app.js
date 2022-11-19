'use strict'

const app = express();
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        DataTransferItemList: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

module.exports = app;