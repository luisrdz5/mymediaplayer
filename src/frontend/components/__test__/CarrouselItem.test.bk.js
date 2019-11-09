import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import CarouselItem from '../carouselItem';

describe('CarrouselItem component', () => {
  test('Match Snapshot', () => {
    const carousel = create(
      <ProviderMock>
        <CarouselItem />
      </ProviderMock>,
    );
    expectExport(carousel.toJSON()).toMatchSnapshot();
  });
});
