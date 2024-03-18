import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

type WooCommerce = {
  url: string;
  consumerKey: string;
  consumerSecret: string;
  version?: string;
  queryStringAuth?: boolean;
};

export async function main(resource: WooCommerce, customerId: number) {
  const WooCommerce = new WooCommerceRestApi(resource);

  try {
    const response = await WooCommerce.get(`customers/${customerId}`);
    return response.data;
  } catch (error) {
    return {
      error: true,
      message: error.response.data || 'Internal Server Error',
    }
  }
}
