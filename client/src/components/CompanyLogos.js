import React from "react";
import "./CompanyLogos.css";

function CompanyLogos() {
  return (
    <section className="CompanyLogos">
      <div className="logoPageText">
        <p></p>
      </div>
      <ul className="retail">
        <li>
          <img
            className="walmartLogo"
            src="https://www.dumaschamber.com/media/com_mtree/images/listings/o/973.png"
            alt="Round solid blue circle. Six yellow lines standing on an invisible circle, equally apart all the way around. With Walmart spelled out right underneath it."
          ></img>
        </li>
        <li>
          <img
            className="bestBuyLogo"
            src="https://purepng.com/public/uploads/large/purepng.com-best-buy-logologobrand-logoiconslogos-2515199394357gbpw.png"
            alt="BEST stacked on top of BUY(solid blue text all caps)inside of a sales tag(clip art solid yellow with a blue border)."
          ></img>
        </li>
        <li>
          <img
            className="targetLogo"
            src="https://1000logos.net/wp-content/uploads/2017/06/target-logo-transparent.png"
            alt="Solid red circle with a white circle inside of it, followed by a red dot inside of it(this is the logo for target, its a bullseye."
          ></img>
        </li>
      </ul>
      <ul className="markets">
        <li>
          <img
            className="krogerLogo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAADlCqUFAAAAh1BMVEX///8AAACgoKDz8/Pw8PDX19eLi4v8/PzLy8v4+Pjo6Ojt7e3GxsbOzs51dXW9vb3f398mJiaxsbFoaGirq6tvb2+ampoSEhJLS0vj4+MxMTGkpKRTU1PZ2dm4uLiTk5M5OTmDg4N7e3tfX188PDwdHR0oKChhYWFERERXV1caGhoNDQ1HR0d/E3fgAAAW1klEQVR4nM2dh3bqOBCGMR2CMZiS0DGkcZP3f75FctE/kkYu2GRnz55zY4ytT2U0RRIt75kyX62my3HLIZPTavX1tPK0nvSe6Xo364xc3Cijjt9e35ovVfP03/3AL0qty/B4eW+ybI3Sn1fHWVVwJYdw+tlQARuj/zkdC3f0fBkdTz8NFLIR+tdF0KmPPJVO8PVac0Hrp//sH+onT+UQfdRZ1prp/62d81kdMl7/q624ddJ/nDZNo8eyOdXUA+qjn/aegx5Lb1pHmWui34YVCLrd7stYyP0fFbRkOH+42LXQT4vP6mN/eDwtFte3rfGUt/3X4rKbDHuDog87rB4seA3060Lt1gmW/e+irfV5XYd+kUronB4q+qP0r8f8Es7aUTV79doP86eQ5QOlf4x+O8kp2iFYmeDz9+9Ff7k8Ho9BKvd/h8v+5fvdtGlv/WFO5zpWVgCP0Oewb5aaq/q+uIT+Ia81uwc/iFZv5Jvz09E5DoKKjkB1+k8Xeye44L2v0dp/KazMklrorfsI9X1y6dbwufSOKW683Kv7ttPwEUNgdrzA7DAd8neun0e/ZgvxslOlfYv87gPkqXT8SA2EC9vlRhdbSeunX3G+a2d3zm7qT2r0cFujoJ89OeLcqFnZqaUC/ZYbf5NMy/26g3cVZZbV7eeOqdmSw788/c7+XmV3XI8NOPeJjHffyVsW9g4wWDRJf7OT+elLv8M6+7tNXtqJg3e2G1rD5ujtLwySHvmv/dIkdya9RL+9tq0fF7f+S9Hvre2ampqLyqHb8jJYJjPLyWZFBE3QW6f4XfLhuuker4t/TV5s+azzxkJUpP+09eqEnRmCDcs4GQC2/l/M9ytMH1lekfSw7yd2eSrdxAgIzI96ddJbLCw/1nW3BkO4+TKI4gYwbZDu2YFTiv7V7PWd2LT5/VN2Id04wncx1V/+1F+I/mq+M/Yptg6v43myiXWc2f3bddD3jcf6scHxJ7rOJkOZ5Nkbllje1FeA3mSMde3JUZxDcLnGLfLxdl3nRYBqkFjHG3Py4VF6Y2D78vKe912HZqx9XyXiXUpefsV7jDE6fozecNbihrfMMYnsmAf1mzaHjvI1+uzbdaV9cui3+lDayCTalC2CK8LKeIe1SUeGlPQBOXLEPN30c30aiRuW1fRdd3jhuznXF4q31wo94lvfSf+tP10upfliX57vXDad69tIUi2ZyuO76N/0R8tez09zOOLPl+NESHCiDkfj6l+aOFrnHHDrPhz0OvxEXPzkQ1YQVI3wrk6IObvG7SNp4miO30tp+k8b3Ip/q7Is3g27GMNtjef45YysOWWzkvS6wpM9yjFrq+cvLJ+OVd/7eRgvT15+zFLYVRJLrxkzcvS6dFb2RUNVSukofEf/qUkGwr3b02vWaC9HT/vnQKSU5q75KuKqLRUYek9wjW4mfuSZwtDTVu6KS7+uPJzq9/ZAYys1xYR8PMJVUFYm/t6gZOjp+JbwttGsRE1r/D1n5vHNyNTEN+c9K/2FfEnC2wJbSlQYyeH4+dlN/6oilRGBT50eU/Hb6OlEXwAemt4V0Fcm1xNc3hifOiSGE2KjJ85YpwD8Jvvq2XWbsgV5Y7lO+TL64jWfngQIB/N8+JZKr7oiHuhrl1zJUFFElySu+CiXnirt7wLw8Ay3F6Pue4beu8s/vTE1o8egp4NezJu51gmEzt1tGmX3uWeQ2kQOWzKQaY7PoCflF8XVpg2LqI6vO0aagBNYAaWKzPRCDZz0RBsLA0V3diyiXDg+5pOVJZEa9mwUEqHmiTIiYV6NnhR/ZvQbq4AqyQlxd5hablLEvEdifbjZSaPH2wYF22hSnEndmatJa5MPDQujvJSelH6f35hSIGOSF7dTprYlPdSQCFqiuJWaovQ3vKmtDwROIHqfd6vKrG3LITwiO71ZGXo0UzeFi6i2CuXa7zDfPHGxw7fWLmrqQXqiG8VwKbbsTD0g14CF9YTPWeEjRYQWiJ7JnD2kxxvE4ECD7JBNa8b8rx7Ar+BMBFTEk7bwZK/Flsy8HSg7ajgx2REtAJWkJbFgEs9N1oCT9bQpT8hcs3lM+jl+LCIRHdv9nmGjT9hPTFHxHW9ZnaW8+Fp1p62gsPDTnYEC9Fo6H4ynXOMAnAynN1i73DQVrtOf4TNhvWn6nqeHYGmuHv8zejHp44g9afTY9FOzHXl6WBuWW4g/oxdIr/DnC6XHOKuY6nU7B/b/avQQL8ktw9/Rd7XGXxB6HOU3Syfm6ZX1+p5bhr+jF4bW2ShJNv6ViLUuxszN06uUfb5d3Ps7ejHyMfL0A/RIKxrTiNHw9OqDfL8N6JteyGHIjdqia6CH9NPM2jAsvYrnFmhOoH+qtSNEzPlgwrwoegyzLWxNz9PPygD9Jb3wXDBie87ooShds28LYelhus+PhAD9M+38WNrUCW1n9HBRuDcW/4ulj8oAAX0dW9XKiWhX0HuzlB4HrGd3VFl6CJPlF2CQPeY52Rwqb1Qxfyb00GWF1W5bbs/Sq+v5oe+7jBOpUPiH5UiNun5Mj5f21CLMhKOHvtz8mowHZWA0tKCH7iDGhjVGwdFDiPB/s2KblTd9kLeoKhCOr7VXcvTq8tMSFNVlTVcVfUp6uPDGJW8YeghtPCs59YBsaCnXgh60lUi22BfeMPSwEPNi/d7/Szzi6AWCHsZryHZgO71ajFJwCe5md4qiqN927ObptU/rvGO6gih+5++p3MLfBWncjqCHklzYDjy30sOS7DgWNOv5k+HEz8rU7fkKpNOHdUMra7k7CZb3Jl3u+9OE+KSyBmSv3ZxE4GbDu0z81D/3p6uVFsw9w5+CHv9kHTUrPa6DkTBZjO8smDttsmpQPxzBsqGZLKxZQwwUTJCj9hjvrEzTCbnf36pmSWqDtu6ihVaX0ApMXNZGj/nAeNRDhHOcHoWQ2NYDy/Y43dPhT49SHcV2wEL2qXr/uDX7Tf4JLxABS+hH0xYOBDHsmRyLhX4E/Xivvx1EftK1QlETwXF0VuZ0WpYcAr56/1mlDPEVW7JSNGyhEuSHPdInNt0IFGHau1l6OzwNtbl2z6X3cBsMR3m1ryoP1V4LPf45v6AG6M/yAq7/yUJa7NvZ3RGqq224WzyViOF2PKU35NK3Nf9KU3oW116n99aDWfALf6sG5N7+a7tOuHD9iyn93AqaFKM/aisHwNYRGpHbTs0fZvQFnWdiu8G+PDqVtOpIwW8r2sUT65wozijAo5w+WXqyJjrQ/gbPTJSdM0PYbV1Eb1vp12SOWix3Ef79ab5gK6doVO5rg20q9OAMzpgccvRkv4CYpjBYDwaqsCK4BXcMveYPWumJyL7Vedev4DfTdOq3uhS/BsZGGhFW+mTF0VPb1aOzGkw6C8fSeSv9SrdXDPrXRX+IjZhaE6AF4+qHjNDGfJikBz2bqVmYSyz0fd84qdCjPix8fHWkY2z0ZhxPoz+NNbBzeiM6CLIU6s9s1oFrcpaCZS+q1lXVTvT3/9hCh9ZiS7n3x98y9Gb8nrz9PDK+qmYH6PvCVAnpn7Eoa6qdFBwrLBZlG6/191vjFB7rjnmOdIx93Os6Eo2AdO8V7oVTdwKuWMewsN2j5pl2iwslKBPpW7vHjuJxG6i7nmNXTTGthyZdqlAg8gdTLSzbXLSYdJjScqJYETzb6mpo9PbA6T8ujyKKzq4nIcbau+qT1Da0tTMYsGhKqatbkhCC+qf0ZEfrx0IKObyxZZ05NLlx9GMXPa5u7WLHJWubgD6bZsF3wa1opK9DqWEwUXovTzrkOUxS0UnPxmWBYZ/ebOIDfTYmoN6wM0IweICuPyhqQu9yA2LxCT1D4j1KH0/QqrNC2h7os14E5UM7AwI0hxb0YLDECH3OCRoxFdAz+RKP03pF6ZPRq8az+hLQp3YNboXBB0JzH5h0GKFHC6EIPcPhcVtBnePepAdFmPVWMFDSWRWUO0ffA/cF9ygT+vxTE4cF6e3WTll69So19E166A5kuSShV/9GY7McvXi66iDcTm+W/qUkPdgAWWdSd6VjHGZkjv4AowN1KE+/7Bki+5+yN+w7weUN9tid+IS19YA+u0dZmVncVN2VmuIcPWi9HowOpFe126ahXDZnpugZh0X0V2blgOfYKabPeEKgydKgSCX6AdDj6grlvbeJyXjmCgnDjFk/JuqQ+S5fZYReNY8KWKU2bHH6SF0nBjJHD+agliofCIknSvUghn7HLzPYO6rVSg9Bxi5HD2TkvcrJ25JNchAyUEFjau2QDqom3kGBtr/x3fvLY7uFnR5KFHL00KtJ6IRUCtBvbLdQSxefQ1eB5dJvtbgtaEARPuCWlFjpoURvHD2SgR0HXaJNPJid7emalwMRGbASC9CPPGLoblowxwkdzuVEbVqPZHZHHL3dzgcVHhAGVbea4xepPyHwDHU7y6f3KWG7BbcNPX4RIdCD8gJH7cDRwzehpiFMRcnUhAShEi26oTqvFvLIo197ZGyvMKItHAluwrfTQ8DyxNFDpFFFN2Cy1GMyWZAZ7CFBj6rRVomfBei/aEr32kLzwuM1InACPUzaU44eIx5jyxfFQCfua9qvIYAtQx6QwEzZ0IlYk0q103tE6Q08ksn69FilDxEaoIfO+crRYwAztT8xICUVBgkdxaMPc3aSHsPViVuJGd0xeb+VXnRuyNC/eCSLGXlsBttOj6eYyAsq5KUeixZ6nELEpo5HHl3ZcA3DkByR0daq9j5C788fY8DpRm+x0oseB/PO8k4PCjT0WA8f6MEexF49ogWESiVk/SAkCxDi+d19/GVC7/xlnE0B+g9qK5zu9BCWFW3CJHGhcc5wGV4/Y+ldifm0lPppKDZ6Pg+ehfGc9GNPD6y2yH3ie3Z6IECtCSZIwNJbDjnKJDVc3GG7hJ45J85T/dFJLxigpw88bdWSmNfsAx/oz3AZZpwlT8/H5FSUqc/eo+jZ1QvZcXhOeuExw59HSQ/+buhxAQ6GHky2HU/P9n3cnGNZ1WTQM3X0mZm+LnrRc9A9XHnaakWhxeznpsC4x54PreqiZ46zJ5mggePXnlSKw/abQJAictFHHjVlXyU93vhulDsRbD28rtHvrTe17GE5PbRM12tsQcdBgsc8JBHX2LnotVKJhmvRSWDtMSv2wJMky5iVjSpHTNbGhs34ov+Yw9WMMA2VYfQ1bEVWen0Y0Tkqq0ATYqndfIrpMUwmVK+963d7vlgF6vvajz/dr/vD+39JBup+1/0W3xZ562HbMj+nuFmuptNpJJeagm2nJVeHl7iP/ayMzMSm5zPv/6SksQ70qO4RxnVzG4b89Wl6jU6uRcpwM0svpNMp/qPiQsSIwUCv1FiCHiNOxtlEfyf62o3HRD9vrZ/Sk1VMmm74S/mpkV7oLZLh8DJ6VBErz3U8/FNlbtBX38r1po3wQNHrM/i58ktqla1GH7aP64qbf4Z6l94rehLLFLPOn/0ADhGNPhyE4cuwmko+a8MncStiejS6AnbSe7acKf2yFdz/zz3TxyZHvekjpCf6QARqmzvnfiPtgbuNkH/Y0lSnv7WXrUoTkngG+i/pdJLYhmj/Ntr4ZbZsK+tQjsR1q986jqscQy1mN5JKOVF6QisM7KbOuobYcG4rbil9Zz2424IV3jnW2zdzB9J/oN4L9KqqUSAOmXuyqKJPShfuKqljocdJDnGt0xOfSKyObuhcDAhE5m5CV/QP2d4yJIJaRhmRWSdAv7bggZpVBNo+V7co+kfKIiOvxFhcm/QkibMq0jSVBMZ97tmFytZ75I1i3iROOeSRVDwAe5fsG40ovsjzCjNl4Y1HjqGU6p0sVMIUYvYv0viGeVCXYIgr797sxgdOXvaNfk8yMOqfxIUQi1KaOPcU6fN0WXZj9e3dspdTBYO7YoCerDeW+cEGTlPAZFwOvRqf1ecfqTiJziQBRszGEPNWFrP+oz8x95XzdN9esDJyMb6NWV9KTy0cEYWr/yceMAufcz6Pit5WbQQ501OTkqzop+fp0hCKULn1D30I7eYcw5kNEmajQa7I6qMaU9u0RROsZCSOzZqrQYzlHqxE6X0Vm0D68Gdyyf3bCXQln6youjUfLFLJsaeytG61H1qIV4VRK1HPKWgbPiirjHvW7Opz6/VNyYKalaJZI7nSk2oMIwmqb3ehaSyZf6j5NDSof6c1qRY0VHlLDE/rzUwl6/TadkRpGtSb3YAJ13kYY5Ye5jbFO2VudtuBZ4ix1UmLm32Y/edRwbc7JPOHKgy9kQwJamsPLb/ZaW70ogGE+HyJWvHtyxcNSe+pMN/F3V6Dt6X+LdvcqJqMjaM68bX9k4xkM3N5M7djg7cuebLQn+nXYtu0TtUH9hY/pjPlWDqyERdYmyh6nk1sWxw1ZdSRnb9Gbx8bn5vNMv1cWufF39RyXsyKOOsGTy1pGI/9Go98j9SrXpnDHrJMRtlf1JJTxT9t/Qn1bXLo9TEz2Fq6xCMCrzpbb8hCb2XrXMYP9FMEdAM3h94Y5tLq1H9iubrgxsqz5fPA9aFLrrZm4tdDcVubdSUfiYs/tek+nH7+GXlpPC6rjLxIG0d3CxyLwdiN3bqBF5totf2yGzkvS3P2lBtYbiFBXGm6HnWthOO3tev4sS6tzeGn7tYp61UbiPyVy9fKSrvpV13wDnoDfxQXuK7cvuZtzm+ncBnt8YSLUrGFsaQ0TKPOq+cQ15EGhncTN0tdB2iuHK8WUmqUSed1blgP3M9/F6A38WOL6acmy8e53v6n0Kq2FFJ6MKZhxC/qLkBvUblxg63qSfJ19ViLklImnrQOPkyz0XrkWnF6i3eZPLEmy2/4bX1tVCak0JNeuEVJ2FY0l6K3hfXi5v+sqfv3jIMy96UG/EjGn34thgF3DmMJeludxpXt3eqyfXrhYi/6wPfv7XIsOaWsuTbquNb7F6a3phCTZdKLPzkIHiSOftnMgvxDSorRe3PLIOwk09XqL/knMooxte0nyB/yRentvv0m0dervzo6/SgdT2v3G/FzSQV6+/zjJyNr39T6LpeEMtp/s1Z9/gmP5ei9rTWwN0z458sn/srlXbqx0bmwd7s8G7I8PWd3+mkfuzS3utN4ZzyVXewqp5i6K0tvO/RbyCGt6o923q/h1iHddey2tJneVqLhS9Gzbkcn80nfjs1WwOgYhwV+Ob/fOF+9Rnpvz4X1g0zJ7sOmKmBwTFY6njgra1xU1Vejd7jcYxWU2J7KuGfFZNxOHIIV//taUVn20vTeDx9sQot9EdZnBoyDaZLMvjk8AKe7XBf9vW87zPsh5Oh+buHjhkDvuEijPdfAEVKesCdd10x/730u//Nwwl3y//rtWTVF0Jnt+irrGg1d0fSeJT3bGP3d9nMSdUI67/x8TUO/sC4YHPxwuoBw3HXpdiZ6pZXdg/TxuRcuOYRf+kkJH+/70/IYTDa2qXpzCI7hLvp9/0e+sgjzam1Ynb06fZH4y8uwXyDCwMmiX2DrTlDEi+elOn1B924QLKOz4+gJU17P/eWkSNJstPyX/zSnPEJ/N7qK/rrlwB+Gl8XN9esQ3vm2iMKhceY7J5vooaJLeYz+Lrty7l13PJ5NJrvT6dSXcv9HOBluxi8ll0YF9p+OeTb9fYA+3b+fRY+XWkoN9Pcprf/EAM9L2zl+Skkt9ELWT4nwdduPKXlNaqO/ezdN94DN6ZG53SY10t/l49LY1v3g4kpFV5R66YW8r2t3cHvrqoZ8jtRPL+Sr36tpfeO4F33lv6+qNEMvZHs7PvhL35PwWp96t0pz9LEs2stxaRe3M162H/AQikvT9LFcV9NiKe9OOF25j9qrVf4DFfQfeZE93sAAAAAASUVORK5CYII="
            alt="Kroger(solid white)within a solid blue oval,within a white thin oval ring, followed by a solid red thick border ring four times thicker than the white oval ring."
          ></img>
        </li>
        <li>
          <img
            className="northGateLogo"
            src="https://www.mmaglobal.com/files/logos/logo_northgatemarket.png"
            alt="NORTHGATE MARKET(solid green text all caps)under a oval shaped solid yellow sign with a green border with Gonzalez in handwriting(red text)with a sombrero on the upper left. Both of these objects are in what looks like a large rectangle, with another rectangle inside shorter in width but taller in height, with a cylinder shaped contour exiting the center top of it(solid white inside,red outline with a white outline after. and a thick green border."
          ></img>
        </li>
        {/* <li>
            <img
              className="smartFinalLogo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejVuxovx0JZ6wDYDu-rtuu8VwqCIZO1JLgg&usqp=CAU"
              alt="SUPERIOR(red text, all caps)arched from the middle its highest point, sloping down to the frontend and backend. GROCERS(black text) directly under SUPERIOR."
            ></img>
          </li> */}
        <li>
          <img
            className="ralphsLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ralphs.svg/1280px-Ralphs.svg.png"
            alt="Solid red circle with Ralphs(white text)centered verically and horizontally."
          ></img>
        </li>
        {/* <li>
            <img
              className="wholeFoodsLogo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfkdntCJIzvyzKbx3j3AYMDtaiD93XhH-rA&usqp=CAU"
              alt="STATER(solid red text all caps)stacked on top of BROS.(solid red text all caps). markets(solid red text all lowercase)directly under BROS."
            ></img>
          </li> */}
        <li>
          <img
            className="numeroUnoLogo"
            src="https://static1.squarespace.com/static/5f42d34c955e4c3b33edc3be/t/5f4324681f6b051d9f74a08c/1605654462574/?format=1500w"
            alt="A number 1(solid white, with black shadows on the bottom and right, in a solid pink circle.NUMERO UNO(solid black text wrapped around the upper half of the pink circle within a solid mint green background draped to the solid pink circle),Market(solid black text wrapped around the lower part of the solid pink circle) Sharing the solid mint green background with NUMERO UNO.The mint green circle has a black border."
          ></img>
        </li>
      </ul>
      <ul className="wholeSale">
        <li>
          <img
            className="samsClubLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRUzSogODYwcIfCvBKztxfr5bPVw7XO7QLA&usqp=CAU"
            alt=""
          ></img>
          </li>
          <li>
            <img
              className="costcoLogo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX01gEES9nnFnJ7LTz1P8ZCUGXL9770BvA6A&usqp=CAU"
              alt="COSTCO(solid red text all caps)sitting on top of 3(solid blue lines), next to WHOLESALE(solid blue all caps)all in a solid blue rectangle."
            ></img>
        </li>
        <li>
          <img
            className="homeDepotLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1200px-TheHomeDepot.svg.png"
            alt="solid orange square.HOME(solid white text)tilted with the H pointing at the bottom left corner and the E pointing to the upper right corner. Above HOME is THE(solid white text),below HOME is DEPOT(solid white text)."
          ></img>
        </li>
      </ul>
    </section>
  );
}

export default CompanyLogos;
