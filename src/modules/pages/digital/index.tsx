import React from 'react';

import editionList from '../../../__mocks__/editions.mock';
import PreorderEditionCard from '../../common/components/preorder-edition-card';
import Showroom from '../../common/components/showroom';

import EditionPageLayout from '../../common/layouts/edition-page';

import styles from './digital.module.css';

const items = ['1', '2', '3'];

function DigitalPage() {
  return (
    <EditionPageLayout>
      {/* <Showroom headerItems={items} keyExtractor={(item) => item} /> */}
      <Showroom.Mobile headerItems={items}>
        <PreorderEditionCard
          {...editionList.digital[0]}
          poster={editionList.digital[0].poster[1]}
          bgPoster={editionList.digital[0].bgPoster[1]}
        />
        <PreorderEditionCard
          {...editionList.digital[1]}
          poster={editionList.digital[1].poster[1]}
          bgPoster={editionList.digital[1].bgPoster[1]}
        />
        <PreorderEditionCard
          {...editionList.digital[2]}
          poster={editionList.digital[2].poster[1]}
          bgPoster={editionList.digital[2].bgPoster[1]}
        />
      </Showroom.Mobile>
    </EditionPageLayout>
  );
}

export default DigitalPage;
