# Sahayak

## Overview
Sahayak is a comprehensive system designed to facilitate a seamless living experience for intern students within the same society or area. It streamlines essential services such as food management, rent tracking, and communication between residents, agents, and the secretary.
This README provides an overview of key features, actors, and development guidelines for the Sahayak project.

## Use Cases

### Food Management
- **Agent**
  - Add new food items
  - View previous food items
  - Update menu

### Rent Management and Fine on Late Maintenance
- **Secretary**
  - Manage monthly maintenance fine and rent
  - Update rent status
  - Send notices regarding rent status

### Password Complexity
- **Agent, Secretary, Students**
  - Implement strong password policies during signup and password reset

### AC and Non-AC Rooms
- **Secretary**
  - Allocate AC and Non-AC rooms
  - Add new rooms
  - Edit existing rooms
  - Mark rooms as green (available) or red (occupied)

### Delete Photos from Uploads
- **Agent**
  - Manage uploaded photos
  - Delete photos as needed

## Actors

### Agent
- Manage everyday food services
- Create and display notices (banners)
- Handle profile management for the area or society
- Facilitate user signup and password management
- Implement captcha for security

### Secretary
- Manage profiles of residents
- Create and display notices
- Handle monthly maintenance fines and rent
- View and manage intern student information
- Allocate and manage rooms
- Implement search functionality for rooms
- Manage password-related tasks

### Students
- View personal profiles
- Check Rent status
- Report problems
- Signup with agent approval

## Login and Signup

- Implement secure login and signup mechanisms.
- APIs should be protected.
- Page access should be controlled.
- Implement redirections based on user roles.
- Display user photos.


## Development Guidelines
- Collect and arrange code in a structured manner.
- Implement proper error handling and security measures.


## how to start
- npm i
- npm run start
