const mongoose = require('mongoose');

// Schéma pour un avis
const reviewSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

// Créer le modèle
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
