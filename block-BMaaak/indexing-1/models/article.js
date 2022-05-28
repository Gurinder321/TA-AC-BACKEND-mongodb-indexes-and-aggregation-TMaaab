var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
});

articleSchema.index({ tags: 1 }); //Multikey Indexes

articleSchema.index({ title: 'text' }); //Text Indexing

articleSchema.index({ title: 'text', description: 'text' }); //Compound Text Indexing

const Article = mongoose.model('Article', articleSchema);
