import useMediaQuery from '../../../hooks/use-media-query';
import editionList from '../../../__mocks__/editions.mock';
import { editionPacks } from '../../common/constants/edition-packs.const';

import PreorderEditionCard from '../../common/components/preorder-edition-card';
import Showroom from '../../common/components/showroom';
import EditionPageLayout from '../../common/layouts/edition-page';

import styles from './digital.module.css';

function DigitalPage() {
  const isMobileScreen = useMediaQuery('(max-width: 639px)');
  const ShowroomComponent = isMobileScreen ? Showroom.Mobile : Showroom;

  return (
    <EditionPageLayout>
      <ShowroomComponent headerItems={editionPacks.digital} keyExtractor={(item) => item}>
        {editionList.digital.map(({ bgPoster, poster, ...edition }, index) => (
          <PreorderEditionCard
            key={index}
            variant="digital"
            poster={poster[1]}
            bgPoster={bgPoster[1]}
            {...edition}
          />
        ))}
      </ShowroomComponent>
    </EditionPageLayout>
  );
}

export default DigitalPage;
