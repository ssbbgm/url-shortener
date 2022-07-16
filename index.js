const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3000 || process.env.PORT;
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
});
  


// app.delete('/delete/:_id', async (req, res) => {
//     const deleteId = await shortUrl.findOneAndDelete({ _id: ObjectId(req.body._id) })
//     res.redirect('/')
// })

// app.listen(process.env.PORT || 3000);