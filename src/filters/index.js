import Vue from 'vue';
import * as functions from './functions';

Object.keys(functions).forEach((key) => Vue.filter(key, functions[key]));