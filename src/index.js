import * as $ from 'jquery';
import Post from './Post';
import './styles/styles.css';
import Logo from './assets/1.jpg';
import './styles/less.less';
import './styles/scss.scss';
import './babel';


const post = new Post('Post title', Logo);

$('pre').html(post.toString());

console.log('Post', post.toString());