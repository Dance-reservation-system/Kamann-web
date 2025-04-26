import { useMutation } from "@tanstack/react-query";
import { LoginPayload } from "../api/schema/login.schema.ts";
import { AuthApi } from "../api";

export function useLogin() {
  // const { setAuthToken } = useAuth();
  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();

  // const onSuccess = async (response: LoginResponse) => {
  //   // const returnTo = searchParams.get(RETURN_TO_PARAM);
  //
  //   setAuthToken(response.token);
  //
  //   // if (returnTo) {
  //   //   // await navigate(returnTo);
  //   // } else {
  //   //   await navigate(Paths.protected.dashboard);
  //   // }
  // };

  return useMutation({
    mutationFn: (args: LoginPayload) => AuthApi.login(args),
    // onSuccess,
  });
}
