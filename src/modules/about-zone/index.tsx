import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Accordion from '../common/components/accordion';
import Carousel from '../common/components/carousel';
import Divider from '../common/components/divider';
import PreviewCard from './components/preview-card';
import ImagePreview from './components/image-preview';
import VideoPreview from './components/video-preview';

import styles from './about-zone.module.css';

import { previews } from './constants/previews.const';
import {
  aboutZoneHeadline,
  aboutZoneParagraphOne,
  aboutZoneParagraphThree,
  aboutZoneParagraphTwo
} from './constants/about-zone.const';

import useHasTouchScreen from '../../hooks/use-has-touch-screen';
import useIsMobileDevice from '../../hooks/use-is-mobile-device';
import useMediaQuery from '../../hooks/use-media-query';

function AboutZone() {
  const isMobileScreenSize = useMediaQuery('(max-width: 639px)');
  const isTabletScreenSize = useMediaQuery('(min-width: 640px) and (max-width: 1023)');
  const isLaptopScreenSize = useMediaQuery('(min-width: 1024px) and max-width: 1239px)');
  const isDesktopScreenSize = useMediaQuery('(min-width: 1240px)');
  const isMobileDevice = useIsMobileDevice();
  const hasTouchScreen = useHasTouchScreen();

  const shouldRenderCarousel = (isMobileDevice || hasTouchScreen) && isMobileScreenSize;
  const shouldRenderAccordion = shouldRenderCarousel;
  const shouldRenderGrid = !hasTouchScreen && !isMobileDevice && !isLaptopScreenSize;

  const paragraphClasses = classNames({
    [styles.paragraph]: true,
    [styles.bold]: !isMobileDevice && !isTabletScreenSize
  });

  function mouseEnterHandler(event: React.MouseEvent<HTMLLIElement>) {
    const video = event.currentTarget.querySelector('video');

    if (video) {
      video.style.zIndex = '3';
      video.setAttribute('autoplay', 'true');
      video.setAttribute('playinline', 'true');
      video.play();
    }
  }
  function mouseLeaveHandler(event: React.MouseEvent<HTMLLIElement>) {
    const video = event.currentTarget.querySelector('video');

    if (video) {
      video.style.zIndex = '-1';
      video.pause();
    }
  }

  return (
    <section className={styles.about_zone_section}>
      <div className="container">
        <h2 className="title">{aboutZoneHeadline}</h2>
        <Divider
          variant="radiation"
          className={classNames({ [styles.mb1]: !isMobileScreenSize && !isTabletScreenSize })}
        />

        <div
          className={classNames({
            [styles.flex]: isDesktopScreenSize && !hasTouchScreen,
            [styles.flex_desktop]: isDesktopScreenSize && hasTouchScreen
          })}
        >
          {shouldRenderAccordion ? (
            <Accordion>
              <p className={paragraphClasses}>{aboutZoneParagraphOne}</p>
              <p className={paragraphClasses}>{aboutZoneParagraphTwo}</p>
              <p className={paragraphClasses}>{aboutZoneParagraphThree}</p>
            </Accordion>
          ) : (
            <div
              className={classNames({
                [styles.paragraphs_wrapper]: true
              })}
            >
              <p className={paragraphClasses}>{aboutZoneParagraphOne}</p>
              <p className={paragraphClasses}>{aboutZoneParagraphTwo}</p>
              <p className={paragraphClasses}>{aboutZoneParagraphThree}</p>
            </div>
          )}

          {shouldRenderCarousel && !shouldRenderGrid ? (
            <Carousel>
              {previews.map(({ image, path }, index) => (
                <Link key={index} to={path}>
                  <PreviewCard>
                    <ImagePreview src={image} className={styles.mobile_preview_image} />
                  </PreviewCard>
                </Link>
              ))}
            </Carousel>
          ) : null}

          {shouldRenderGrid ? (
            <ul
              className={classNames({
                [styles.grid]: true,
                [styles.pt5]: !hasTouchScreen
              })}
            >
              {previews.map(({ image, video }, index) => (
                <li key={index} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                  <PreviewCard className={styles.preview}>
                    <>
                      <ImagePreview src={image} className={styles.preview_image} />
                      <VideoPreview src={video} className={styles.preview_video} />
                    </>
                  </PreviewCard>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default AboutZone;
