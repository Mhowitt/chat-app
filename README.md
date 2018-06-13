# challenge-eng-base

This starter kit currently supports `React` for the frontend and `Go`, `Python`, `Java`, or `Node` for the backend.

To get the project up and running:
1. Install Docker https://docs.docker.com/engine/installation/
2. In a terminal, go to the directory `challenge-eng-base-master`
3. Edit `docker-compose.yml`. Change `services: backend: build:` based on your preferred language. Options are `backend-golang`, `backend-python`, `backend-java`, or `backend-node`.
4. For a backend project
    1. `docker-compose up backend`
    2. Test that it's running http://localhost:18000/test
5. For a fullstack project
    1. `docker-compose up fullstack`
    2. Test that it's running http://localhost:13000/test

To restart the project

    docker-compose down
    docker-compose up <backend or fullstack>

To see schema changes, remove the old db volume by adding `-v` when stopping

    docker-compose down -v

To see code changes, rebuild by adding `--build` when starting

    docker-compose up --build <backend or fullstack>

If you run into issues connecting to the db on startup, try restarting (without the `-v` flag).
