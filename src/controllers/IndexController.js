import BaseController from './BaseController'

export default class IndexController extends BaseController {
  index() {
    this.setVar('hello', 'Hi!')
    this.render('index')
  }
}
