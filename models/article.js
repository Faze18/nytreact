var mongoose = require( "mongoose" );
var Schema = mongoose.Schema;

var articleSchema = new Schema( {
    title: { type: String },
    date: { type: String },
    url: { type: String }
} );

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;