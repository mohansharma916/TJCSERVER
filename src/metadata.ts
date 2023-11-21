/* eslint-disable */
export default async () => {
  const t = {
    ['./users/models/user.model']: await import('./users/models/user.model'),
  };
  return {
    '@nestjs/swagger/plugin': {
      models: [
        [
          import('./documents/entities/document.entity'),
          {
            DocumentModal: {
              documentTitle: { required: true, type: () => String },
              documentUrl: { required: true, type: () => String },
              userId: { required: true, type: () => String },
              id: { required: true, type: () => Number },
            },
          },
        ],
        [
          import('./subscription-email/entities/subscription-email.entity'),
          {
            SubscriptionEmail: {
              email: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./request-destination/entities/request-destination.entity'),
          {
            RequestDestination: {
              name: { required: true, type: () => String },
              email: { required: true, type: () => String },
              mobileNumber: { required: true, type: () => String },
              destination: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./booking-trip/entities/booking-trip.entity'),
          {
            BookingTrip: {
              tripDate: { required: false, type: () => String },
              userId: { required: false, type: () => String },
              tripId: { required: true, type: () => Number },
            },
          },
        ],
      ],
      controllers: [
        [
          import('./app.controller'),
          {
            AppController: {
              getHello: { type: String },
              getHelloName: { type: String },
            },
          },
        ],
      ],
    },
    '@nestjs/graphql/plugin': {
      models: [
        [
          import('./auth/dto/signup.input'),
          {
            SignupInput: {
              email: {},
              mobileNumber: {},
              name: {},
              password: {},
            },
          },
        ],
        [
          import('./auth/models/token.model'),
          { Token: { accessToken: {}, refreshToken: {} } },
        ],
        [
          import('./common/models/base.model'),
          { BaseModel: { id: {}, createdAt: {}, updatedAt: {} } },
        ],
        [
          import('./documents/entities/document.entity'),
          {
            DocumentModal: {
              documentTitle: {},
              documentUrl: {},
              userId: {},
              id: {},
            },
          },
        ],
        [
          import('./users/models/user.model'),
          {
            User: {
              email: {},
              name: { nullable: true },
              active: { nullable: true },
              mobileNumber: { nullable: true },
              role: {},
              Documents: { nullable: true },
            },
          },
        ],
        [
          import('./auth/models/auth.model'),
          {
            Auth: { user: { type: () => t['./users/models/user.model'].User } },
          },
        ],
        [
          import('./auth/dto/login.input'),
          { LoginInput: { email: {}, password: {} } },
        ],
        [
          import('./auth/dto/refresh-token.input'),
          { RefreshTokenInput: { token: {} } },
        ],
        [
          import('./users/dto/change-password.input'),
          { ChangePasswordInput: { oldPassword: {}, newPassword: {} } },
        ],
        [
          import('./users/dto/update-user.input'),
          {
            UpdateUserInput: {
              firstname: { nullable: true },
              lastname: { nullable: true },
            },
          },
        ],
        [
          import('./subscription-email/dto/create-subscription-email.input'),
          { CreateSubscriptionEmailInput: { email: {} } },
        ],
        [
          import('./subscription-email/dto/update-subscription-email.input'),
          { UpdateSubscriptionEmailInput: { id: {} } },
        ],
        [
          import('./subscription-email/entities/subscription-email.entity'),
          { SubscriptionEmail: { email: {} } },
        ],
        [
          import('./request-destination/dto/create-request-destination.input'),
          {
            CreateRequestDestinationInput: {
              name: {},
              email: {},
              mobileNumber: {},
              destination: {},
            },
          },
        ],
        [
          import('./request-destination/dto/update-request-destination.input'),
          { UpdateRequestDestinationInput: { id: {} } },
        ],
        [
          import('./request-destination/entities/request-destination.entity'),
          {
            RequestDestination: {
              name: {},
              email: {},
              mobileNumber: {},
              destination: {},
            },
          },
        ],
        [
          import('./documents/dto/create-document.input'),
          {
            CreateDocumentInput: {
              documentTitle: {},
              documentUrl: {},
              userId: {},
            },
          },
        ],
        [
          import('./documents/dto/update-document.input'),
          { UpdateDocumentInput: { id: {} } },
        ],
        [
          import('./booking-trip/dto/create-booking-trip.input'),
          {
            CreateBookingTripInput: {
              tripDate: { nullable: true },
              userId: { nullable: true },
              tripId: {},
            },
          },
        ],
        [
          import('./booking-trip/dto/update-booking-trip.input'),
          { UpdateBookingTripInput: { id: {} } },
        ],
        [
          import('./booking-trip/entities/booking-trip.entity'),
          {
            BookingTrip: {
              tripDate: { nullable: true },
              userId: { nullable: true },
              tripId: {},
            },
          },
        ],
        [
          import('./common/pagination/pagination.args'),
          {
            PaginationArgs: {
              skip: { nullable: true, type: () => Number },
              after: { nullable: true, type: () => String },
              before: { nullable: true, type: () => String },
              first: { nullable: true, type: () => Number },
              last: { nullable: true, type: () => Number },
            },
          },
        ],
        [
          import('./common/pagination/page-info.model'),
          {
            PageInfo: {
              endCursor: { nullable: true },
              hasNextPage: {},
              hasPreviousPage: {},
              startCursor: { nullable: true },
            },
          },
        ],
      ],
    },
  };
};
