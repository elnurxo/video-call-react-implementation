# ZegoCloud Video Call React Application

A real-time video calling application built with React.js and ZegoCloud, enabling high-quality video conferences with minimal latency.

## Features

- 1-on-1 video calls
- Group video conferences
- Real-time chat messaging
- Screen sharing capabilities
- Audio mute/unmute
- Video on/off controls
- Room creation and joining
- Participant list

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js 16.x or higher
- npm 8.x or higher
- A ZegoCloud account with:
  - AppID
  - ServerSecret
  - Valid project credentials

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Install dependencies:
```bash
cd zegocloud-video-call
npm install
```

3. Create a `.env` file in the root directory and add your ZegoCloud credentials:
```env
VITE_ZEGO_APP_ID=your_app_id
VITE_ZEGO_SERVER_SECRET=your_server_secret
```

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. To start a video call:
   - Enter your display name
   - Create or join a room using a room ID
   - Allow camera and microphone permissions when prompted

## Project Structure

```
src/
├── components/         # Reusable UI components
├── hooks/             # Custom React hooks
├── pages/             # Main application pages
├── services/          # API and ZegoCloud services
├── utils/             # Helper functions
└── App.tsx            # Main application component
```

## Configuration

The application uses the following environment variables:

- `VITE_ZEGO_APP_ID`: Your ZegoCloud AppID
- `VITE_ZEGO_SERVER_SECRET`: Your ZegoCloud Server Secret

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ZegoCloud Documentation](https://docs.zegocloud.com/)
- [React Documentation](https://react.dev/)
- [Vite](https://vitejs.dev/)

## Support

For support, please contact [your-email] or open an issue in the repository.
