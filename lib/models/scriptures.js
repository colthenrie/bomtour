'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Scripture Schema
 */
var ScriptureSchema = new Schema({
    ordernumb: Number,
    reference: String,
    pagenumb: String,
    verse_text: String,
    support_materials: {
        image: String,
        video: String,
        bible_ref: [{ footnotenumb: Number, reference: String, verse_text: String }],
        }
});

/**
 * Validations
 */
ScriptureSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');

mongoose.model('Thing', ThingSchema);
