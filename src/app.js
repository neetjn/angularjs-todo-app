import angular from 'angular'
import 'angular-ui-router'
import 'angularfire'

const App = angular.module('bp', ['ui.router'])

import authService from '@/services/auth'

  App.factory('$authService', authService)

import Header from '@/components/header'
import Footer from '@/components/footer'
import TaskEditor from '@/components/task-editor'
import TaskMaker from '@/components/task-editor'
import TaskTile from '@/components/task-editor'
import TaskView from '@/components/task-editor'

  App.component('header', Header)  // # install components
  App.component('footer', Footer)
  App.component('task-editor', TaskEditor)
  App.component('task-maker', TaskMaker)
  App.component('task-tile', TaskTile)
  App.component('task-view', TaskView)

import router from '@/router'

  App.config(router)  // # init router
