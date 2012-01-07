var o;

function noting_happens()
{
	alert("Ничего не происходит")
}

function switch_portraits(x)
{
	switch(x)
	{
	  case 0:
		o=document.getElementById("portrait1"); o.style.display='none';
		o=document.getElementById("portrait2"); o.style.display='none';
		o=document.getElementById("portrait3"); o.style.display='none';
		o=document.getElementById("portrait0"); o.style.display='block';
	  break;
	
	  case 1:
		o=document.getElementById("portrait0"); o.style.display='none';
		o=document.getElementById("portrait2"); o.style.display='none';
		o=document.getElementById("portrait3"); o.style.display='none';
		o=document.getElementById("portrait1"); o.style.display='block';
	  break;

	  case 2:
		o=document.getElementById("portrait0"); o.style.display='none';
		o=document.getElementById("portrait1"); o.style.display='none';
		o=document.getElementById("portrait3"); o.style.display='none';
		o=document.getElementById("portrait2"); o.style.display='block';
	  break;
	  
	  case 3:
		o=document.getElementById("portrait0"); o.style.display='none';
		o=document.getElementById("portrait1"); o.style.display='none';
		o=document.getElementById("portrait2"); o.style.display='none';
		o=document.getElementById("portrait3"); o.style.display='block';
	  break;
	}
}

function details(x)
{
	switch(x)
	{
	  case 0: o=document.getElementById("legend0"); o.innerHTML="Е.е. по темачке";
	  break;
	  case 1: o=document.getElementById("legend1"); o.innerHTML="Надежда-Шмадежда. Атаман";
	  break;
	  case 2: o=document.getElementById("legend2"); o.innerHTML="Радуется";
	  break;
	  case 3: o=document.getElementById("legend3"); o.innerHTML="Совсем большая";
	  break;
	}
}

function def(x)
{
	switch(x)
	{
	  case 0: o=document.getElementById("legend0"); o.innerHTML="Спб";
	  break;
	  case 1: o=document.getElementById("legend1"); o.innerHTML="Киров";
	  break;
	  case 2: o=document.getElementById("legend2"); o.innerHTML="Екб";
	  break;
	  case 3: o=document.getElementById("legend3"); o.innerHTML="Now";
	  break;
	}
}

function random_fact()
{			
	facts=new Array("У Нади наиглупейшая привычка говорить о себе в третьем лице",
			"Наверное Надя надо поседеть и сгорбиться, чтоб работники розничной торговли наконец уяснили: да, ей уже есть 18.",
			"У Нади было стопроцентное зрение, пока она в седьмом классе не прочитала с экрана четыре подряд книжки про Гарри Поттера",
			"У Нади была мышка по имени Ларри. дада, подразумевается тот самый Ларри",
			"Однажды в детском садике перед сном читали рассказ Толстого, где говорилось, что от проглоченной косточки умирают. А потом Надя случайно проглотила косточку от вишни и конечно же уверилась, что скоро умрёт. Прям на несколько дней так уверилась. Но потом не умерла.",
			"Меньше всего у Нади живут наушники. У них неизменно перестаёт звучать одно ухо не позднее чем через несколько месяцев",
			"Личный самолёт неплохо бы решил значительную часть надиных проблем",
			"У Нади кончается фантазия",
			"Года в четыре Надя привезла из Сочи пальмочку в стаканчике из-под йогурта. Пальмочка за пятнадцать лет превратилась в здоровенную раскидистую пальму, и лезла листьями в глаза, потому что стояла около кровати. А недавно она стала чахнуть, сохнуть и совсем умерла. Но это несвязанные факты.",
			"Надя очень любит путешествовать, потому что передвижения в пространстве создают ощущение бурной деятельности.",
			"Надя всегда хотела погонять автостопом, прыгнуть с парашютом и заплести дреды. А потом стала гонять автостопом, прыгнула с парашютом и заплела дреды. Щас вот думает.",
			"Надя только что заметила, что у неё на подоконнике ровно два медведя, два оленя и два жирафа и подумала: \"Неспроста.\"",
			"Надя не ест мясо. Выпендривается.",
			"У Нади топографический кретинизм. Это такая редкая способность блудиться в трёх соснах.",
			"\"Школа жизни - это школа капитанов! Там я научился водку пить из стаканов. Школа жизни - это школа мужчин! Там научился я (пам-па-па-пам) обламывать Жен Щин!\" <br>*напевает* извините.. весь день в голове вертится.. &copyНоль",
			"У Нади есть самая настоящая рация, на которую ей звонит милый, когда у него нет денег на телефоне. кароче всегда",
			"Как-то на вопрос типа \"а что тебе подарить\" Надя сказала, мол, дапофик, главное чтоб был кусочек души. Потом Анечка (а это она спрашивала) подсунула к подарку маленький джинсовый кружочек с булавочкой и бабочкиным крылышком от какой-то заколочки и с надписью \"А это кусочек моей души :)\". Так выглядит самый клёвый в мире подарок",
			"Как-то раз Надю отправили в самый настоящий нокдаун. Дело было на соревнованиях по карате, парень был из Тобольска и с зелёным поясом. Потом Надин сенсей долго испепелял его взглядом, потому что очень её любил и расстроился.",
			"Надя вечно не подумав ляпнет какую-нибудь неполиткорректность",
			"Однажды, во вполне себе сознательном возрасте, Надя зачем-то решила окунуть градусник в чай. Чай был не то что уж совсем кипяток, но значительно горячее сорока двух градусов, так что градусник не выдержал перенапряжения. Этот чай Надя пить не стала.",
			"Однажды Надя попала в сборник детской и юношеской поэзии, выпущенной \"Каравеллой\" со стихотворением, написанным по дороге на тренировку по скалалазанью. На церимонии по поводу выпуска всем вручили эти сборники, но Надя потеряла его, едва выйдя на улицу",
			"Надя знает нескольких волшебников",
			"Надя встретила своё двадцатилетие в поезде.",
			"Надя не очень любит нормальных людей",
			"У Нади есть оранжевый скейт. Нет, ещё не умеет",
			"Надя отколупала ноготь от большого пальца правой руки. ууу!",
			"Однажды Надя уехала в Питер и стала там жить",
			"Надя боится изображений насекомых крупным планом и самих насекомых вблизи",
			"Мой вам совет: обнимайте контрабасистов"
			);

	
	var o1=document.getElementById("div_with_facts");
	o1.innerHTML=facts[Math.floor(Math.random()*facts.length)];
}

function cs_story(x)
{
	if(x == 1)
	{
		o=document.getElementById("cs_begin"); o.style.display='none';
		o=document.getElementById("cs_end"); o.style.display='block';
		o=document.getElementById("cs_text1"); o.style.display='none';
		o=document.getElementById("cs_text2"); o.style.display='block';
	}
	else if (x == 0)
	{
		o=document.getElementById("cs_begin"); o.style.display='block';
		o=document.getElementById("cs_end"); o.style.display='none';
		o=document.getElementById("cs_text1"); o.style.display='block';
		o=document.getElementById("cs_text2"); o.style.display='none';
	}
}



