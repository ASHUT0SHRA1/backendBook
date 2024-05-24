const express = require('express');
const router = express.Router();
const bookModel = require('../models/booksModel')
router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({ message: 'Book added successfully' });
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/getBook', async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({
            books
        })

    } catch (error) {

    }
})

router.get('/getBook/:id', async (req, res) => {
    let book;
    const id = req.params.id;

    try {
        book = await bookModel.findById(id);
        res.status(200).json({ book });
    } catch (error) {
        console.log(error)
    }
})


router.put('/updateBook/:id', async (req, res) => {
    const id = req.params.id;
    let books;
    const { bookname, description, author, image, price } = req.body;
    try {
        books = await bookModel.findByIdAndUpdate(id, { 
             bookname, 
             description,
             author, 
             image, 
             price
        });


       books =  await books.save().then(() => { 
            res.json({
                message : "Book data updates successfully" 
            })
        })
    } catch (error) {

    }
})


router.delete('/deleteBook/:id' , async(req,res)=>{
    const id = req.params.id ; 
    try {
        await bookModel.findByIdAndDelete(id).then(()=>{
            res.status(200).json({message  :"deleted Successfully"})

        })
    }catch (error) {
        console.log(error) ;
    }
})
module.exports = router; 