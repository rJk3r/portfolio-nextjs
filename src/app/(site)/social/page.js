'use client';
import './social.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Social() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 680px)');

		// Функция для обновления состояния
		const handleMediaChange = (e) => {
			setIsMobile(e.matches);
		};

		// Устанавливаем начальное состояние
		handleMediaChange(mediaQuery);

		// Добавляем слушатель изменений
		mediaQuery.addEventListener('change', handleMediaChange);

		// Убираем слушатель при размонтировании компонента
		return () => mediaQuery.removeEventListener('change', handleMediaChange);
	}, []);

	useEffect(() => {
			  return () => {
			  };
		  }, []);

	const toMainPage = () => {
		window.location.href = '/'; // Полная перезагрузка
	};


  return (
	<>
	{isMobile ? (
		<div className="social-mobile" style={{background: "#1a1a1a"}}>
			<div className="links-mobile-wrapper">
				<div className="links-mobile">
					<div className="container-mobile">
					  <Link href="https://github.com/rJk3r">
						<div className="subscription-mobile">
							<div className="price-mobile">Github</div>

							<div className="duration-mobile">SOURCE CODE HERE</div>
						</div>
					  </Link>

						<Link href="https://t.me/rJk3r">
						<div className="div">
							<div className="text-wrapper">Telegram</div>

							<div className="duration-mobile-2">MY CHANNEL</div>
						</div>
						</Link>

						<Link href="https://vk.com/redjoker">
						<div className="subscription-mobile-2">
							<div className="price-mobile-2">VK</div>

							<div className="duration-mobile-3">LONG ANSWER HERE</div>
						</div>
						</Link>
					</div>

					<div className="container-mobile">
                        
						<Link href="https://discord.gg/58Zpsku2rh">
						<div className="subscription-mobile-3">
							<div className="price-mobile-3">Discord</div>

							<div className="duration-mobile-4">WRITE ME HERE</div>
						</div>
						</Link>

						<Link href="https://music.yandex.ru/artist/22337174">
						<div className="background-mobile-wrapper">
							<div className="background-mobile">
								<div className="price-mobile-4">
									Yandex
									<br />
									Music
								</div>
							</div>
						</div>
						</Link>

						<Link href="https://steamcommunity.com/id/TOOREDJOKER/">
						<div className="subscription-mobile-4">
							<div className="price">Steam</div>

							<div className="duration">PLAY TOGETHER</div>
						</div>
						</Link>
					</div>

					<div className="container-mobile">
					  <Link href="https://www.youtube.com/@rJk3r">
						<div className="background-mobile-wrapper">
							<div className="background-mobile-2">
								<div className="price-mobile-5">YouTube</div>

								<div className="duration-mobile-5">MY YOUTUBE CHANNEL</div>
							</div>
						</div>
					  </Link>

						<Link href="https://www.twitch.tv/rJk3r">
						<div className="subscription-mobile-5">
							<div className="price-mobile-6">Twitch</div>

							<div className="duration-mobile-6">STREAMS HERE</div>
						</div>
						</Link>
					</div>
					<Link className="backtext-mobile" href="/" onClick={toMainPage}>
					  <h3 className="backtext-mobile">Back</h3>
					</Link>
				</div>
			</div>
		</div>) :
		(
		  <div className="social" style={{background: "#1a1a1a"}}>
			<div className="social-links-wrapper">
				<div className="social-links">
					<div className="container">
					  <Link href="https://github.com/rJk3r">
						<div className="subscription-plan">
							<div className="price">Github</div>

							<div className="duration">SOURCE CODE HERE</div>
						</div>
						</Link>

						<Link href="https://t.me/rJk3r">
						<div className="div">
							<div className="text-wrapper">Telegram</div>

							<div className="duration-2">MY CHANNEL</div>
						</div>
						</Link>

						<Link href="https://vk.com/redjoker">
						<div className="subscription-plan-2">
							<div className="price-2">VK</div>

							<div className="duration-3">LONG ANSWER HERE</div>
						</div>
						</Link>
					</div>

					<div className="container">
						<Link href="https://discord.gg/58Zpsku2rh">
						<div className="subscription-plan-3">
							<div className="price-3">Discord</div>

							<div className="duration-4">WRITE ME HERE</div>
						</div>
						</Link>

						<Link href="https://music.yandex.ru/artist/22337174">
						<div className="background-wrapper">
							<div className="background">
								<div className="price-4">
									Yandex
									<br />
									Music
								</div>
							</div>
						</div>
						</Link>

						<Link href="https://steamcommunity.com/id/TOOREDJOKER/">
						<div className="subscription-plan-4">
							<div className="price-5">Steam</div>

							<div className="duration-5">PLAY TOGETHER</div>
						</div>
						</Link>
					</div>


					<div className="container">
					  <Link href="https://www.youtube.com/@rJk3r">
						<div className="background-wrapper">
							<div className="background-2">
								<div className="price-6">YouTube</div>

								<div className="duration-6">MY YOUTUBE CHANNEL</div>
							</div>
						</div>
					  </Link>

					  <Link href="https://www.twitch.tv/rJk3r">
						<div className="subscription-plan-5">
							<div className="price-7">Twitch</div>

							<div className="duration-7">STREAMS HERE</div>
						</div>
					  </Link>
					</div>
					<Link className="backtext" href="/" onClick={toMainPage}>
					  <h1 className="backtext">Back</h1>
					</Link>
				</div>
			</div>
		</div>
		)}
		</>
	);
};
