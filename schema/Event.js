'use strict';
//setting sechema
exports = module.exports = function(app, mongoose) {
  //definning the schema
  var eventSchema = new mongoose.Schema({
    // _id: { type: String },
    name:{type: String},
    description: { type: String },
    venue: { type: String },
    date: { type: Date },
    startTime: { type: String },
    endTime: { type: String },
    username: { type: String },
    search: [String]
  });
  eventSchema.plugin(require('./plugins/pagedFind'));
  eventSchema.index({ name: 1});
  eventSchema.index({ username: 1});
  eventSchema.index({ date: 1});
  eventSchema.index({ startTime: 1});
  eventSchema.index({ endTime: 1 });
  eventSchema.index({ venue: 1});
  eventSchema.index({ search: 1});
  eventSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('Event', eventSchema);
};
