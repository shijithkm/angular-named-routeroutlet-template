import { OrderNewModule } from './order-new.module';

describe('OrderNewModule', () => {
  let orderNewModule: OrderNewModule;

  beforeEach(() => {
    orderNewModule = new OrderNewModule();
  });

  it('should create an instance', () => {
    expect(orderNewModule).toBeTruthy();
  });
});
