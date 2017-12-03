(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  function main$lambda(closure$port) {
    return function () {
      println('Example app listening on port ' + toString(closure$port) + '!');
      return Unit;
    };
  }
  function main(args) {
    println('Server Starting!');
    var express = require('express');
    var app = express();
    var path = require('path');
    var bodyParser = require('body-parser');
    var debug = require('debug')('kotlin_node_js:server');
    var http = require('http');
    var port = normalizePort(process.env.PORT);
    app.use(bodyParser.json());
    app.set('port', port);
    app.set('views', path.join(__dirname, '../../webapp'));
    app.set('view engine', 'ejs');
    app.use(express.static('webapp'));
    var server = http.createServer(app);
    app.listen(port, main$lambda(port));
    app.use('/', router());
  }
  function normalizePort(arg) {
    var port = arg;
    if (port >= 0) {
      return port;
    }
    return 3000;
  }
  function Task(id, text) {
    this.id = id;
    this.text = text;
    this.isArchived = false;
    this.isDone = false;
  }
  Task.prototype.markAsDone = function () {
    this.isDone = true;
  };
  Task.prototype.archive = function () {
    this.isArchived = true;
  };
  Task.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Task',
    interfaces: []
  };
  Task.prototype.component1 = function () {
    return this.id;
  };
  Task.prototype.component2 = function () {
    return this.text;
  };
  Task.prototype.copy_puj7f4$ = function (id, text) {
    return new Task(id === void 0 ? this.id : id, text === void 0 ? this.text : text);
  };
  Task.prototype.toString = function () {
    return 'Task(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  Task.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Task.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text)))));
  };
  function router$lambda(req, res) {
    return res.render('index');
  }
  function router$lambda_0(closure$db) {
    return function (req, res) {
      return res.send(toList(closure$db.values));
    };
  }
  function router$lambda_1(closure$db) {
    return function (req, res) {
      return res.json(closure$db.get_11rb$(req.params.id));
    };
  }
  function router$lambda_2(closure$db) {
    return function (req, res) {
      var task = JSON.parse(JSON.stringify(req.body));
      var $receiver = closure$db;
      var key = task.id;
      $receiver.put_xwzc9p$(key, task);
      return res.json(task);
    };
  }
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function router() {
    var express = require('express');
    var router = express.Router();
    var db = HashMap_init();
    var $receiver = ['Kotlin is Awesome!', 'Buy Milk', 'Check Post office', 'Call John'];
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var id = randomId();
      db.put_xwzc9p$(id, new Task(id, element));
    }
    router.get('/', router$lambda);
    router.get('/tasks', router$lambda_0(db));
    router.get('/task/:id', router$lambda_1(db));
    router.post('/task/:id', router$lambda_2(db));
    return router;
  }
  function randomId() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i <= 4; i++)
      text += String.fromCharCode(possible.charCodeAt(Math.floor(Math.random() * possible.length)));
    return text;
  }
  _.main_kand9s$ = main;
  _.normalizePort_za3lpa$ = normalizePort;
  var package$model = _.model || (_.model = {});
  package$model.Task = Task;
  _.router = router;
  _.randomId = randomId;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=app.js.map
