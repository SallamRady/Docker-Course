# first stage base Image
FROM mrc.microsoft.com/dotnet/sdk:5.0 AS build
# define working directory path
WORKDIR /src
# Copy csproj file and restore dependances.
COPY *.csproj .
RUN dotnet restore
# Copy and publish application files
COPY . .
RUN dotnet publish -c restore -o /app

# finall stage Image [image num 2]
FROM mrc.microsoft.com/dotnet/sdk:5.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT [ "dotnet","hrapp.dll" ]