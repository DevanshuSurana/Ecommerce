import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = 'pk_test_51OHnXxSDX6n6fChvCvvJMh2wn0EECTjKbOcLgduUvl8kjMZpcKzqQUXTH8kXwgneIM9q6gfniQEnVH1tQQ7gpi1f00lwdeLK8i';
  }

  return stripePromise;
}

export default getStripe;