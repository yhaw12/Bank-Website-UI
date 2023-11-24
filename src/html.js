<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Boxicons -->
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
	<!-- My CSS -->
	<link rel="stylesheet" href="style.css">

	<title>AdminHub</title>
</head>
<body>
	 {/* SIDEBAR  */}
	<section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">Flash Bank</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-shopping-bag-alt' ></i>
					<span class="text">Transfer Money</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Withdraw Money</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">My Account</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">Message</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-group' ></i>
					<span class="text">Team</span>
				</a>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
	<!-- SIDEBAR -->



	<!-- CONTENT -->
	<section id="content">
		<!-- NAVBAR -->
		<nav>
			<i class='bx bx-menu' ></i>
			<form action="#">
				<div class="form-input">
					<input type="search" placeholder="Search...">
					<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden>
			<label for="switch-mode" class="switch-mode"></label>
			<a href="#" class="notification">
				<i class='bx bxs-bell' ></i>
				<span class="num">8</span>
			</a>
			<a href="#" class="profile">
				<img src="img/people.png">
			</a>
		</nav>
		<!-- NAVBAR -->

		<!-- MAIN -->
		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb" id="breadcrumb">
						<li>
							<a class="active" href="#">Home</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a  href="#">Dashboard</a>
						</li>
					</ul>
				</div>
				
			</div>

			<ul class="box-info">
				<li>
					<i class='bx bxs-calendar-check' ></i>
					<span class="text">
						<h3>03312343356677</h3>
						<p>Account Info</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>$2834</h3>
						<p>Widthrawals</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-dollar-circle' ></i>
					<span class="text">
						<h3>$2543</h3>
						<p>Total Transactions</p>
					</span>
				</li>
			</ul>

			<!-- Transfer Money section -->
	<section id="transfer-money-section" style="display: none;">
		<div class="card">

		<h2 style="text-align: center;"> Transfer Money</h2>
		<form id="transfer-money-form">
			<label for="recipient">Recipient Name:</label>
			<input type="text" id="recipient" name="recipient" required>

			<label for="country">Select Country:</label>
			<select id="country" name="country" required></select>

			<label for="bank">Bank Name:</label>
			<input type="text" id="recipient" name="recipient" required>

			<label for="account-number">Recipient Account Number:</label>
			<input type="text" id="account-number" name="account-number" required>

			<label for="amount">Transfer Amount:</label>
			<input type="number" id="amount" name="amount" required>

			<button type="submit">Transfer Money</button>
		</form>
		</div>
	</section>

	<section id="withdraw-money-section" style="display: none;">
		<div class="card">
			<h2 style="text-align: center;"> Withdraw Money</h2>
			<form id="withdraw-money-form">
				<label for="recipient">Withdraw To:</label>
				<select name="withdrawal_type" id="withdrawal_type">
					<option value="Bank">Bank</option>
					<option value="Mobile_Money">Mobile Money</option>
				</select>

				<!-- New select element for mobile money operators -->
				<div id="mobileMoneyOperators" style="display: none;">
					<label for="operator">Choose Operator:</label>
					<select name="operator" id="operator">
						<option value="Vodacash">Vodacash</option>
					<option value="MTN">MTN</option>
					<option value="Tigocash">Tigocash</option>
					<!-- Add more operators as needed -->
				</select>
				<label for="mobile_number">Mobile Number:</label>
				<input type="string" id="mobile_number" name="mobile_number" required>
			</div>

			<label for="amount">Withdraw Amount:</label>
			<input type="number" id="withdrawal_amount" name="withdrawal_amount" required>

				<button type="submit">Withdraw Money</button>
			</form>
		</div>
	</section>



			
</main>
		<!-- MAIN -->
</section>
	<!-- CONTENT -->
	

	<script src="script.js"></script>
</body>
</html>