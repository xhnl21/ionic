import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'fcm',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: [
        "profile",
        "email"
      ],
      // serverClientId: "684898322638-trlo32dvpb2m2c03hhk3t2eqvf8ainth.apps.googleusercontent.com",
      serverClientId: "684898322638-ii25lgt2itbb968saasee2b9hoqv6cg1.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }    
  },
};

export default config;
