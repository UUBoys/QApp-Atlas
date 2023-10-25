function grpcToPromise<TResponse>(
  call: (callback: (err: any, response?: TResponse) => void) => void
): Promise<TResponse> {
  return new Promise((resolve, reject) => {
    call((err, response) => {
      if (err || !response) {
        console.log(err);
        reject(err || new Error("No response received from gRPC call"));
      } else {
        resolve(response);
      }
    });
  });
}
export { grpcToPromise };
