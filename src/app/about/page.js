"use client"
import './about.css';
import React, { Children, useState, useEffect, useCallback } from 'react';
import "./about.css";
import Link from "next/link";
import Image from 'next/image';
import mob7 from "./mob-7.png";
import mobileDesignIcon from "./mobile-design-icon.svg";
import mobileDevIcon from "./mobile-dev-icon.svg";
import rjk3r1 from "./rjk3r-1.png";
import vector8 from "./vector-8.svg";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function About() {

    const isMobile = useMediaQuery(850)

    const isMinimumReached = useMediaQuery(1180)

    const toMainPage = () => {
        window.location.href = '/'; // Полная перезагрузка
    };

    useEffect(() => {
          return () => {
          };
      }, []);

    if (!isMobile) {
    return (
        <>
        {isMinimumReached ? (
                <div className="mobile-about">
            <div className="div">
                <div className="overlap">
                    <div className="mob">Andrey Zverev</div>

                    <div className="img" alt="Mob" src="/mob-7.png" />
                </div>

                <p className="text-wrapper">
                    Where code meets creativity — crafting digital experiences
                </p>

                <p className="p">that bend technical precision with aesthetic vision</p>

                <div className="mob-2">Live Code Console</div>

                <div className="overlap-group">
                    <div className="mob-3" />
                </div>

                <div className="mob-4">
                    <div className="div-wrapper">
                        <div className="text-wrapper-2">Developer</div>
                    </div>

                    <div className="overlap-2">
                        <div className="text-wrapper-3">Designer</div>
                    </div>

                    <div className="overlap-3">
                        <div className="text-wrapper-4">Creative people</div>
                    </div>
                </div>

                <div className="mob-5">
                    <div className="overlap-4">
                        <div className="overlap-5">
                            <div className="overlap-6">
                                <p className="text-wrapper-5">
                                    With over 5 years of experience in full-stack development, I
                                    transform complex problems into elegant solutions. My
                                    expertise spans modern web technologies, frim Next and Node.js
                                    to cloud architecture and database design.
                                </p>

                                <div className="rectangle" />

                                <div
                                    className="mobile-design-icon"
                                />
                            </div>

                            <div className="text-wrapper-6">The Designer</div>
                        </div>

                        <p className="text-wrapper-7">
                            User experience &amp; interface design
                        </p>

                        <p className="text-wrapper-8">
                            Design systems &amp; component libraries
                        </p>

                        <div className="text-wrapper-9">Prototyping &amp; user testing</div>

                        <p className="text-wrapper-10">
                            Brand identity &amp; visual storytelling
                        </p>

                        <div className="rectangle-2" />
                    </div>

                    <div className="mobile-developer">
                        <div className="overlap-group-2">
                            <div className="overlap-7">
                                <div className="text-wrapper-11">The Developer</div>

                                <div className="overlap-8">
                                    <p className="text-wrapper-12">
                                        With over 5 years of experience in full-stack development, I
                                        transform complex problems into elegant solutions. My
                                        expertise spans modern web technologies, frim Next and
                                        Node.js to cloud architecture and database design.
                                    </p>

                                    <div className="rectangle-3" />

                                    <div
                                        className="mobile-dev-icon"
                                    />
                                </div>
                            </div>

                            <div className="text-wrapper-7">
                                Clean maintainable code architecture
                            </div>

                            <div className="text-wrapper-8">
                                Performance optimization &amp; scalability
                            </div>

                            <p className="text-wrapper-9">
                                Modern frameworks &amp; best practises
                            </p>

                            <p className="text-wrapper-10">
                                API design &amp; system integration
                            </p>

                            <div className="rectangle-4" />
                        </div>
                    </div>
                </div>

                <Link href="https://github.com/rJk3r">
                <div className="mob-6">
                    <div className="text-wrapper-13">Github</div>

                    <div className="vector" />
                </div>
                </Link>

                <Link href="/" onClick={toMainPage}>
                <div className="mob-wrapper">
                    <div className="mob-7">back to main page</div>
                </div>
                </Link>

                <div className="overlap-wrapper">
                    <div className="overlap-9">
                        <div className="text-wrapper-14">Who am I</div>

                        <p className="text-wrapper-15">
                            With over 5 years of experience in full-stack development, I
                            transform complex problems into elegant solutions. My expertise
                            spans modern web technologies, frim Next and Node.js to cloud
                            architecture and database design.
                        </p>

                        <div className="mobile-icon">
                            <div className="rjkr-wrapper">
                                <div className="rjkr"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) : (
            <div className="about">
            <div className="div">
                <div className='cards-pc'>
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="text-wrapper">Developer</div>

                        <div className="overlap-2">
                            <p className="p">
                                With over 5 years of experience in full-stack development, I
                                transform complex problems into elegant solutions. My expertise
                                spans modern web technologies, frim Next and Node.js to cloud
                                architecture and database design.
                            </p>

                            <div className="rectangle" />
                        </div>
                    </div>

                    <div className="text-wrapper-2">
                        Clean maintainable code architecture
                    </div>

                    <div className="text-wrapper-3">
                        Performance optimization &amp; scalability
                    </div>

                    <p className="text-wrapper-4">
                        Modern frameworks &amp; best practises
                    </p>

                    <p className="text-wrapper-5">API design &amp; system integration</p>

                    <div className="rectangle-2" />
                </div>

                <div className="overlap-group-2">
                    <div className="overlap-group">
                        <div className="overlap-2">
                            <p className="p">
                                With over 5 years of experience in full-stack development, I
                                transform complex problems into elegant solutions. My expertise
                                spans modern web technologies, frim Next and Node.js to cloud
                                architecture and database design.
                            </p>

                            <div className="rectangle-3" />
                        </div>

                        <div className="text-wrapper-6">Designer</div>
                    </div>

                    <p className="text-wrapper-2">
                        User experience &amp; interface design
                    </p>

                    <p className="text-wrapper-3">
                        Design systems &amp; component libraries
                    </p>

                    <div className="text-wrapper-4">Prototyping &amp; user testing</div>

                    <p className="text-wrapper-5">
                        Brand identity &amp; visual storytelling
                    </p>

                    <div className="rectangle-4" />
                    </div>
                </div>

                <div className='tags-pc'>
                <div className="div-wrapper">
                    <div className="text-wrapper-7">Developer</div>
                </div>

                <div className="overlap-4">
                    <div className="text-wrapper-12">Designer</div>
                </div>

                <div className="overlap-6">
                    <div className="text-wrapper-14">Creative people</div>
                </div>
                </div>

                <div className="text-wrapper-8">Andrey Zverev</div>

                <div className="overlap-3">
                    <p className="text-wrapper-9">
                        Where code meets creativity — crafting digital experiences that bend
                    </p>

                    <p className="text-wrapper-10">
                        technical precision with aesthetic vision
                    </p>
                </div>

                <div className="text-wrapper-11">Live Code Console</div>


                <Link href="https://github.com/rJk3r">
                <div className="overlap-5">
                    <div className="text-wrapper-13">Github</div>

                    <div className="rectangle-5" />
                </div>
                </Link>

                <div className="rectangle-wrapper">
                    <div className="rectangle-6" />
                </div>

                <div className="overlap-7">
                    <div className="text-wrapper-15">Who am I</div>

                    <p className="text-wrapper-16">
                        With over 5 years of experience in full-stack development, I
                        transform complex problems into elegant solutions. My expertise
                        spans modern web technologies, frim Next and Node.js to cloud
                        architecture and database design.
                    </p>

                    <div className="rectangle-7" />
                </div>

                <div className="art" width={484.72} height={685.81} />

                <Link href="/" onClick={toMainPage}>
                <div className="back-button">
                    <div className="text-wrapper-17">back to main page</div>
                </div>
                </Link>
            </div>
        </div>
        )}
        </>
    );
    } else
    {
        return(
            <>
                <div className="over-phone-about">
            <div className="div">
                <div className="overlap">  
                    <div className="over-phone">Andrey Zverev</div>

                    <div className="img-art" />
                </div>

                <p className="text-wrapper">
                    Where code meets creativity — crafting digital experiences
                </p>

                <p className="p">that bend technical precision with aesthetic vision</p>

                <div className="over-phone-2">Live Code Console</div>

                <div className="overlap-group">
                    <div className="over-phone-3" />

                    <div className="mob">
                        <div className="overlap-2">
                            <p className="over-phone-4">
                                With over 5 years of experience in full-stack development, I
                                transform complex problems into elegant solutions. My expertise
                                spans modern web technologies, frim Next and Node.js to cloud
                                architecture and database design.
                            </p>

                            <p className="over-phone-5">
                                User experience &amp; interface design
                            </p>

                            <p className="over-phone-6">
                                Design systems &amp; component libraries
                            </p>

                            <div className="over-phone-7">Prototyping &amp; user testing</div>

                            <p className="over-phone-8">
                                Brand identity &amp; visual storytelling
                            </p>

                            <div className="over-phone-9">The Designer</div>

                            <div className="over-phone-10" />

                            <div className="over-phone-wrapper">
                                <div
                                    className="over-phone-11"
                                />
                            </div>
                        </div>

                        <div className="overlap-3">
                            <div className="mobile-developer">
                                <div className="overlap-group-2">
                                    <div className="over-phone-12">The Developer</div>

                                    <p className="over-phone-13">
                                        With over 5 years of experience in full-stack development, I
                                        transform complex problems into elegant solutions. My
                                        expertise spans modern web technologies, frim Next and
                                        Node.js to cloud architecture and database design.
                                    </p>

                                    <div className="img-wrapper">
                                        <div
                                            className="over-phone-14"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="over-phone-15">
                                Clean maintainable code architecture
                            </div>

                            <div className="over-phone-16">
                                Performance optimization &amp; scalability
                            </div>

                            <p className="over-phone-17">
                                Modern frameworks &amp; best practises
                            </p>
                        </div>

                        <p className="over-phone-18">API design &amp; system integration</p>

                        <div className="over-phone-19" />
                    </div>
                </div>

                <div className="over-phone-20">
                    <div className="div-wrapper">
                        <div className="text-wrapper-2">Developer</div>
                    </div>

                    <div className="overlap-4">
                        <div className="text-wrapper-3">Designer</div>
                    </div>

                    <div className="overlap-5">
                        <div className="text-wrapper-4">Creative people</div>
                    </div>
                </div>

                <Link href="https://github.com/rJk3r">
                <div className="over-phone-21">
                    <div className="text-wrapper-5">Github</div>

                    <div className="vector" />
                </div>
                </Link>

                <Link href="/" onClick={toMainPage}>
                <div className="over-phone-btn">
                    <div className="over-phone-22">back to main page</div>
                </div>
                </Link>

                <div className="overlap-wrapper">
                    <div className="overlap-6">
                        <div className="text-wrapper-6">Who am I</div>

                        <p className="text-wrapper-7">
                            With over 5 years of experience in full-stack development, I
                            transform complex problems into elegant solutions. My expertise
                            spans modern web technologies, frim Next and Node.js to cloud
                            architecture and database design.
                        </p>

                        <div className="mobile-icon">
                            <div className="rjkr-wrapper">
                                <div className="rjkr" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    }
};
