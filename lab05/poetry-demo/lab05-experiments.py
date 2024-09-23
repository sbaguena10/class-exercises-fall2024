import requests
from bs4 import BeautifulSoup

def main():
    print("hello world")
    user_agent = {'User-agent': 'Mozilla/5.0'}
    response = requests.get("https://new.cs.unca.edu/", headers=user_agent)

    soup = BeautifulSoup(response.content, 'html.parser')

    links = soup.find_all('a')

    for link in links:
        url = link.get('href')
        if url:  # Only print if the link has an href attribute
            print(url)

if __name__ == "__main__":
    main()
