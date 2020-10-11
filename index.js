const express = require("express"),
  morgan = require("morgan");
const app = express();

const bodyParser = require("body-parser"),
  methodOverride = require("method-override");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
// const http = require("http"),
//   url = require("url");

// http
//   .createServer((request, response) => {
//     let requestURL = url.parse(request.url, true);
//     if (requestURL.pathname == "/documentation.html") {
//       response.writeHead(200, { "Content-Type": "text/plain" });
//       response.end("Documentation on the bookclub API.\n");
//     } else {
//       response.writeHead(200, { "Content-Type": "text/plain" });
//       response.end("Welcome to my book club!\n");
//     }
//   })
//   .listen(8080);

// console.log("My first Node test server is running on Port 8080.");

let users = [
  {
    id: 1,
    Username: "Jennifer Manaytay",
    Password: "1234",
    Email: "h.monet1104@gmail.com",
    Birthday: "11/04/1990",
    FavoriteMovies: [],
  },
  {
    id: 2,
    Username: "Natasha Keating",
    Password: "5678",
    Email: "h.monet1104@yahoo.com",
    Birthday: "11/04/1990",
    FavoriteMovies: [],
  },
  {
    id: 3,
    Username: "Sean Keating",
    Password: "5555",
    Email: "seank@gmail.com",
    Birthday: "11/04/1990",
    FavoriteMovies: [],
  },
];
let movies = [
  {
    id: 1,
    Title: "Silence of the Lambs",
    Description:
      "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    Genre: {
      Name: "Thriller",
      Description:
        "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
    },
    Director: {
      Name: "Jonathan Demme",
      Bio:
        "Robert Jonathan Demme was an American director, producer, and screenwriter.",
      Birth: "1944",
      Death: "2017",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 2,
    Title: "Good Will Hunting",
    Description:
      "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    Genre: {
      Name: "Drama",
      Description:
        "In film and television, drama is a genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. ... These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods.",
    },
    Director: {
      Name: "Gus Van Sant",
      Bio:
        "Gus Van Sant was born on July 24, 1952 in Louisville, Kentucky, USA as Gus Greene Van Sant Junior.",
      Birth: "1952",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,655,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 3,
    Title: "The Notebook",
    Description:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    Genre: {
      Name: "Romance",
      Description:
        "Romance films or romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion, and the affectionate romantic involvement of the main characters and the journey that their love takes them through dating, courtship or marriage.",
    },
    Director: {
      Name: "Nick Cassavetes",
      Bio:
        "Nick Cassavetes was born in New York City, the son of actress Gena Rowlands and Greek-American actor and film director John Cassavetes. As a child, he appeared in two of his father's films: Husbands (1970) and A Woman Under the Influence (1974). After spending so much of his youth surrounded by the film industry, Cassavetes initially decided he did not want to go into the field. He instead attended Syracuse University on a basketball scholarship. His athletic career was effectively ended by an injury, and he decided to rethink his aspirations, ultimately deciding to attend his parents' alma mater, the American Academy of Dramatic Arts in New York. He has appeared in the films, Face/Off (1997), The Wraith (1986), Life (1999), Class of 1999 II: The Substitute (1994), Backstreet Dreams (1990) and The Astronaut's Wife (1999), among others. He has directed several films, including John Q (2002), Alpha Dog (2006), She's So Lovely (1997), Unhook the Stars (1996), The Notebook (2004), and My Sister's Keeper (2009). He also adapted the screenplay for Blow (2001) and wrote the dialogue for the Justin Timberlake music video, \"What Goes Around... Comes Around\". In 1985, Cassavetes married Isabelle Rafalovich. They had two daughters together, Virginia Cassavetes (Virginia Sara Cassavetes) (born in 1986) and Sasha Cassavetes (born in 1988), before divorcing. He then married Heather Wahlquist (Heather \"Queenie\" Wahlquist), who has appeared in several of his films, including a small role in The Notebook (2004) as Sara, a secondary character and best friend to the female lead Allie Hamilton, portrayed by Rachel McAdams. The movie is effectively a family project, as Cassavetes's own mother, Gena Rowlands, appears as the older, married Allie Calhoun.",
      Birth: "1959",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
    Featured: true,
  },
  {
    id: 4,
    Title: "Up",
    Description:
      "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
    Genre: {
      Name: "Adventure",
      Description:
        "Adventure. Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.",
    },
    Director: {
      Name: "Peter Docter",
      Bio:
        "Pete Docter was born on October 9, 1968 in Bloomington, Minnesota, USA as Peter Hans Docter.",
      Birth: "1968",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SY1000_CR0,0,664,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 5,
    Title: "The Sixth Sense",
    Description:
      "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
    Genre: {
      Name: "Mystery",
      Description:
        "A mystery film is a genre of film that revolves around the solution of a problem or a crime. It focuses on the efforts of the detective, private investigator or amateur sleuth to solve the mysterious circumstances of an issue by means of clues, investigation, and clever deduction.",
    },
    Director: {
      Name: "M. Night Shyamalan",
      Bio:
        "Born in Puducherry, India, and raised in the posh suburban Penn Valley area of Philadelphia, Pennsylvania, M. Night Shyamalan is a film director, screenwriter, producer, and occasional actor, known for making movies with contemporary supernatural plots. He is the son of Jayalakshmi, a Tamil obstetrician and gynecologist, and Nelliate C. Shyamalan.",
      Birth: "1970",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_.jpg",
    Featured: true,
  },
  {
    id: 6,
    Title: "Saving Private Ryan",
    Description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    Genre: {
      Name: "War",
      Description:
        "War film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama. It has been strongly associated with the 20th century. The fateful nature of battle scenes means that war films often end with them.",
    },
    Director: {
      Name: "Steven Spielberg",
      Bio:
        "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. ",
      Birth: "1946",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,679,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 7,
    Title: "Braveheart",
    Description:
      "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    Genre: {
      Name: "History",
      Description:
        "A historical film is a fiction film showing past events or set within a historical period. This extensive genre shares territory with the biopic, costume drama, heritage film, and epic film.",
    },
    Director: {
      Name: "Mel Gibson",
      Bio:
        "Mel Columcille Gerard Gibson was born January 3, 1956 in Peekskill, New York, USA, as the sixth of eleven children of Hutton Gibson, a railroad brakeman, and Anne Patricia (Reilly) Gibson (who died in December of 1990). ",
      Birth: "1956",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 8,
    Title: "Ford v Ferrari",
    Description:
      "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
    Genre: {
      Name: "Biography",
      Description:
        "A biographical film, or biopic (/ˈbaɪoʊpɪk/; abbreviation for biographical motion picture), is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character's real name is used.",
    },
    Director: {
      Name: "James Mangold",
      Bio:
        "An American film and television director, screenwriter and producer. ",
      Birth: "1963",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 9,
    Title: "Hacksaw Ridge",
    Description:
      "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
    Genre: {
      Name: "Biography",
      Description:
        "A biographical film, or biopic (/ˈbaɪoʊpɪk/; abbreviation for biographical motion picture), is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character's real name is used.",
    },
    Director: {
      Name: "Mel Gibson",
      Bio:
        "Mel Columcille Gerard Gibson was born January 3, 1956 in Peekskill, New York, USA, as the sixth of eleven children of Hutton Gibson, a railroad brakeman, and Anne Patricia (Reilly) Gibson (who died in December of 1990). His mother was Irish, from County Longford, while his American-born father is of mostly Irish descent.",
      Birth: "1956",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SY1000_CR0,0,647,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 10,
    Title: "A Beautiful Mind",
    Description:
      "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    Genre: {
      Name: "Biography",
      Description:
        "A biographical film, or biopic (/ˈbaɪoʊpɪk/; abbreviation for biographical motion picture), is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character's real name is used.",
    },
    Director: {
      Name: "Ron Howard",
      Bio:
        "Academy Award-winning filmmaker Ron Howard is one of this generation's most popular directors. From the critically acclaimed dramas A Beautiful Mind (2001) and Apollo 13 (1995) to the hit comedies Parenthood (1989) and Splash (1984), he has created some of Hollywood's most memorable films. ",
      Birth: "1954",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
    Featured: true,
  },
];

// GET requests

app.get("/", (req, res) => {
  res.send("Welcome to my movies club!");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

//list of movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

//return data about director by name
app.get("/movies/director/:Name", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.Director.Name === req.params.Name;
    })
  );
});

//return data about genre by name/title
app.get("/movies/genres/:Name", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.Genre.Name === req.params.Name;
    })
  );
});

//deletes a movie by title
app.delete("/movies/:Title", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.Title === req.params.Titlee;
    })
  );
});

//list of users
app.get("/users", (req, res) => {
  res.json(users);
});

//adds new users
app.post("/users", (req, res) => {
  res.status(500).send("User added!");
});

//list of usernames
app.get("/users/:Username", (req, res) => {
  res.json(
    users.find((user) => {
      return user.Username === req.params.Username;
    })
  );
});

//update users info (username)
app.put("/users/:Username", (req, res) => {
  res.json(
    users.find((user) => {
      return user.Username === req.params.Username;
    })
  );
});

//allows user to add movie to favorites
app.post("users/:Username/favorites", (req, res) => {
  res.status(500).send("Succesfully added movie to favorites!");
});

//allows user to remove movie from favorites
app.delete("users/:Username/favorites", (req, res) => {
  res.status(500).send("Successfully removed movie from favorites.");
});

//allows user to deregister
app.delete("/users/:Email", (req, res) => {
  res.status(500).send("User Deleted.");
});

//deletes a user by username
app.delete("/users/:Username", (req, res) => {
  res.json(
    users.find((user) => {
      return user.Username === req.params.Username;
    })
  );
});

let myLogger = (req, res, next) => {
  console.log(req.url);
  next();
};

let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(myLogger);
app.use(requestTime);

app.get("/", (req, res) => {
  let responseText = "Welcome to my app!";
  responseText += "<small>Requested at: " + req.requestTime + "</small>";
  res.send(responseText);
});

app.get("/secreturl", (req, res) => {
  let responseText = "This is a secret url with super top-secret content.";
  responseText += "<small>Requested at: " + req.requestTime + "</small>";
  res.send(responseText);
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
