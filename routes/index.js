exports.getHomePage = (req, res) => {
    let query = 'SELECT * FROM players ORDER BY id';

    // execute the query
    db.query(query, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('index.ejs', {
            title: 'Welcome to Soka | View players',
            players: result
        });
    });
}