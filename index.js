var omnivore = require('tilelive-omnivore');
var tilelive = require('tilelive');
var path = require('path');
var stream = require('stream');

omnivore.registerProtocols(tilelive);

var geo = ['omnivore:/', path.resolve(__dirname, 'valid.geotiff.tif')].join('/');
var merc = ['omnivore:/', path.resolve(__dirname, 'valid.merc.geotiff.tif')].join('/');

var hide = new stream.Writable();
var show = process.stdout;

tilelive.copy(merc, null, { outStream: hide });
