# MetaChat

MetaChat is a decentralized messaging platform that allows users to chat securely using their MetaMask wallets. The platform leverages blockchain technology to ensure privacy and security in communication.

## Features

- **Decentralized Messaging**: Secure communication through blockchain technology.
- **MetaMask Integration**: Connect and authenticate with your MetaMask wallet.
- **User-Friendly Interface**: Built with Tailwind CSS for a responsive and modern design.
- **Real-Time Communication**: Send and receive messages in real-time.

## Technology Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Moralis for handling blockchain interactions and user authentication
- **Wallet Integration**: MetaMask

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)
- A [MetaMask](https://metamask.io/) wallet
- A [Moralis](https://moralis.io/) account and server set up

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/bharabhi01/metachat.git
    cd metachat
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up Moralis:

   - Go to your [Moralis dashboard](https://admin.moralis.io/).
   - Create a new server if you haven't already.
   - Navigate to the "Server Details" and get your `Application ID` and `Server URL`.
   - Create a `.env.local` file in the root of your project and add the following environment variables:

     ```bash
     REACT_APP_MORALIS_APPLICATION_ID=your-application-id
     REACT_APP_MORALIS_SERVER_URL=your-server-url
     ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

### Deployment

To deploy the application, follow these steps:

1. Build the application:

    ```bash
    npm run build
    ```

2. Deploy the `build` folder to your preferred hosting provider, such as [Vercel](https://vercel.com/).
