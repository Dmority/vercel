import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

backend.addOutput({
  auth: {
    aws_region: "ap-northeast-1",
    user_pool_id: "ap-northeast-1_dgZ3qBBDv",
    user_pool_client_id: "4be1q9gkqbrgin7gptd97hul",
    oauth: {
      identity_providers: [],
      domain: "https://id-pool-dainoji.auth.ap-northeast-1.amazoncognito.com",
      scopes: ["email", "openid", "aws.cognito.signin.user.admin", "profile"],
      redirect_sign_in_uri: ["localhost:3001/hello"],
      redirect_sign_out_uri: ["localhost:3001/hello"],
      response_type: "code",
    },
  },
});
