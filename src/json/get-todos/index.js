var arc = require('@architect/functions')

function route(req, res) {
  res({
    json: [{
        title: 'Learn marko',
        completed: true,
        id: 0
      },
      {
        title: 'Build an awesome web app',
        completed: false,
        id: 1
      },
      {
        title: 'Profit',
        completed: false,
        id: 2
      }
    ]
  })
}

exports.handler = arc.json.get(route)
