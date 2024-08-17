import * as z from 'zod'

export const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
  confirmPassword: z.string().min(1, "Password confirmation is required"),
})
.refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Password do not match",
});

export function parsedPricesRanges(priceRanges: string[]) {
  // let lowBounds = priceRanges.map(priceRange => {
  //   let [lowBound] = priceRange.replace('/\$/g', '').split(' - ').map(Number);
  //   return lowBound;
  // })

  // let highBounds = priceRanges.map(priceRange => {
  //   let [, highBound] = priceRange.replace('/\$/g', '').split(' - ').map(Number);
  //   return highBound;
  // })

  // return {lowBounds, highBounds};

  let bounds = priceRanges.map(priceRange => {
    let [lowBound, highBound] = priceRange.replace(/\$/g, '').split(' - ').map(Number);
    return {lowBound, highBound};
  })

  let lowBounds = bounds.map(bound => bound.lowBound);
  let highBounds = bounds.map(bound => bound.highBound);

  return {lowBounds, highBounds};
}
