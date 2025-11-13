# WanderLust

A full-stack web application for travel and accommodation listings, similar to Airbnb. Users can browse, create, and manage listings for various types of accommodations including rooms, mountains, castles, pools, camping sites, farms, arctic locations, domes, boats, and beaches.

## Features

- **User Authentication**: Local login/signup, Google OAuth, Facebook, and Instagram authentication
- **Listing Management**: Create, read, update, and delete accommodation listings
- **Review System**: Users can leave reviews and ratings for listings
- **Booking System**: Integrated booking functionality for listings
- **Image Upload**: Cloudinary integration for image storage
- **Map Integration**: Mapbox integration for location visualization
- **Categories**: Listings categorized by type (Trending, Room, Iconic Cities, Mountains, etc.)
- **Flash Messages**: User feedback through flash notifications
- **Responsive Design**: Built with EJS templates and CSS

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js (Local, Google, Facebook, Instagram)
- **Frontend**: EJS templating engine, CSS
- **Image Storage**: Cloudinary
- **Maps**: Mapbox SDK
- **Session Management**: Express-session with MongoDB store
- **Validation**: Joi for input validation
- **File Upload**: Multer with Cloudinary storage

## Prerequisites

- Node.js (v22.15.0 recommended)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd wanderlust
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see Environment Variables section)

4. Start the server:
   ```bash
   npm start
   ```

The application will be running on `http://localhost:8080`

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
ATLAS_DB_URL=mongodb://127.0.0.1:27017/wanderlust  # or your MongoDB Atlas URL
SECRET_CODE=your-secret-key-here
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_KEY=your-cloudinary-key
CLOUDINARY_SECRET=your-cloudinary-secret
MAPBOX_TOKEN=your-mapbox-token
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_APP_ID=your-facebook-app-id
FACEBOOK_APP_SECRET=your-facebook-app-secret
INSTAGRAM_CLIENT_ID=your-instagram-client-id
INSTAGRAM_CLIENT_SECRET=your-instagram-client-secret
```

## Usage

1. Register a new account or login with existing credentials
2. Browse listings on the homepage
3. Create new listings by clicking "Add New Listing"
4. View detailed listing information, including maps and reviews
5. Leave reviews and ratings for listings
6. Book accommodations through the booking system
7. Manage your own listings from your profile

## Project Structure

```
wanderlust/
├── config/
│   └── passportConfig.js          # Passport authentication strategies
├── controllers/
│   ├── listings.js                # Listing CRUD operations
│   ├── reviews.js                 # Review management
│   └── users.js                   # User management
├── init/
│   ├── data.js                    # Sample data initialization
│   └── index.js                   # Database initialization
├── models/
│   ├── listing.js                 # Listing schema
│   ├── review.js                  # Review schema
│   └── user.js                    # User schema
├── public/
│   ├── css/                       # Stylesheets
│   └── js/                        # Client-side JavaScript
├── routes/
│   ├── auth.js                    # Authentication routes
│   ├── booking.js                 # Booking routes
│   ├── listing.js                 # Listing routes
│   ├── review.js                  # Review routes
│   └── user.js                    # User routes
├── utils/
│   ├── ExpressError.js            # Custom error class
│   └── wrapAsync.js               # Async error wrapper
├── views/
│   ├── error.ejs                  # Error page
│   ├── includes/                  # Partial templates
│   ├── layouts/
│   │   └── boilerplate.ejs        # Main layout
│   ├── listings/                  # Listing-related views
│   └── users/                     # User-related views
├── app.js                         # Main application file
├── cloudConfig.js                 # Cloudinary configuration
├── middleware.js                  # Custom middleware
├── package.json                   # Dependencies and scripts
├── schema.js                      # Validation schemas
└── README.md                      # This file
```

## API Endpoints

### Listings
- `GET /listings` - Get all listings
- `GET /listings/:id` - Get specific listing
- `POST /listings` - Create new listing
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews
- `POST /listings/:id/reviews` - Add review to listing
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Users
- `GET /signup` - User registration page
- `POST /signup` - Register new user
- `GET /login` - User login page
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

### Authentication
- `GET /auth/google` - Google OAuth
- `GET /auth/facebook` - Facebook OAuth
- `GET /auth/instagram` - Instagram OAuth

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

**Md Aashif Raza**
