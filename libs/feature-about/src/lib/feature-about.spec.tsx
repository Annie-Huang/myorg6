import React from 'react';
import { render } from '@testing-library/react';

import FeatureAbout from './feature-about';

describe(' FeatureAbout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureAbout />);
    expect(baseElement).toBeTruthy();
  });
});
