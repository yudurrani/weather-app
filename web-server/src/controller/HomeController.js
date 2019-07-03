module.exports = {
    getHome: (req, res) => {
        res.render('index', {
            title: 'Weather App',
            name: 'Yasir Durrani'
        })
    },
    about: (req, res) => {
        res.render('about', {
            title:'About',
            name:'this one is by me'
            
        })
    },
    help: (req, res) => {
        res.render('help', {
            helpText:'This is some helpful text.',
            title:'Help',
            name:'Yasir',
        })
    }
}