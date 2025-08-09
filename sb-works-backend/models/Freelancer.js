const mongoose = require('mongoose');

/**
 * Freelancer Schema - Extended profile for freelancer users
 * Contains skills, portfolio, ratings, and work history
 */
const freelancerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  skills: [{
    type: String,
    trim: true
  }],
  experience: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Expert'],
    default: 'Beginner'
  },
  portfolio: [{
    title: String,
    description: String,
    url: String,
    image: String
  }],
  bio: {
    type: String,
    maxlength: [500, 'Bio cannot be more than 500 characters']
  },
  profilePicture: {
    type: String,
    default: null
  },
  hourlyRate: {
    type: Number,
    min: [0, 'Hourly rate cannot be negative'],
    default: 0
  },
  location: {
    city: String,
    country: String,
    timezone: String
  },
  languages: [{
    language: String,
    proficiency: {
      type: String,
      enum: ['Basic', 'Conversational', 'Fluent', 'Native']
    }
  }],
  education: [{
    degree: String,
    institution: String,
    year: Number,
    description: String
  }],
  certifications: [{
    title: String,
    issuer: String,
    date: Date,
    url: String
  }],
  availability: {
    type: String,
    enum: ['Available', 'Busy', 'Not Available'],
    default: 'Available'
  },
  completedProjects: {
    type: Number,
    default: 0
  },
  ongoingProjects: {
    type: Number,
    default: 0
  },
  totalEarnings: {
    type: Number,
    default: 0
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  responseTime: {
    type: String,
    default: 'Not specified'
  },
  successRate: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
freelancerSchema.index({ userId: 1 });
freelancerSchema.index({ skills: 1 });
freelancerSchema.index({ hourlyRate: 1 });
freelancerSchema.index({ 'rating.average': -1 });
freelancerSchema.index({ availability: 1 });

// Virtual for full profile completion percentage
freelancerSchema.virtual('profileCompletion').get(function() {
  let completion = 0;
  const fields = ['bio', 'profilePicture', 'skills', 'portfolio', 'hourlyRate', 'location.city'];
  
  fields.forEach(field => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      if (this[parent] && this[parent][child]) completion += 100/fields.length;
    } else {
      if (this[field] && (Array.isArray(this[field]) ? this[field].length > 0 : true)) {
        completion += 100/fields.length;
      }
    }
  });
  
  return Math.round(completion);
});

// Method to calculate and update rating
freelancerSchema.methods.updateRating = async function() {
  if (this.reviews.length > 0) {
    const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    this.rating.average = totalRating / this.reviews.length;
    this.rating.count = this.reviews.length;
    await this.save();
  }
};

// Method to update project stats
freelancerSchema.methods.updateProjectStats = async function(projectValue, isCompleted = false) {
  if (isCompleted) {
    this.completedProjects += 1;
    this.ongoingProjects = Math.max(0, this.ongoingProjects - 1);
    this.totalEarnings += projectValue;
  } else {
    this.ongoingProjects += 1;
  }
  await this.save();
};

module.exports = mongoose.model('Freelancer', freelancerSchema);
