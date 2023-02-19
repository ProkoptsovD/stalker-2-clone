import { editionPacks } from '../../common/constants/edition-packs.const';
import editionList from '../../../__mocks__/editions.mock';

import PreorderEditionCard from '../../common/components/preorder-edition-card';
import EditionPageLayout from '../../common/layouts/edition-page';
import Showroom from '../../common/components/showroom';
import useMediaQuery from '../../../hooks/use-media-query';

function PhysicalPage() {
  const isMobileScreen = useMediaQuery('(max-width: 639px)');
  const ShowroomComponent = isMobileScreen ? Showroom.Mobile : Showroom;

  return (
    <EditionPageLayout>
      <ShowroomComponent headerItems={editionPacks.physical} keyExtractor={(item) => item}>
        {editionList.physical.map(({ bgPoster, poster, ...edition }, index) => (
          <PreorderEditionCard
            key={index}
            variant="physical"
            poster={poster[1]}
            bgPoster={bgPoster[1]}
            prependEditionNameTo={[0]}
            {...edition}
          />
        ))}
      </ShowroomComponent>
    </EditionPageLayout>
  );
}

export default PhysicalPage;
