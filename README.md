# SoundWave

SoundWave is a full-stack music platform web application developed in HTML, CSS, JavaScript, JQuery, PHP with micro framework FlightPHP and MySQL database.

This is a project created during the Web Programming course at International Burch University.
The project is done the two dedicated and hard-working students Mak Alijević and Emina Sirbubalo.

Our mutual passion for music gave rise to the idea for the music platform SoundWave. We decided to create and design our project based on the latest application trends, but also to implement our own twist to it. We truly hope that you will enjoy our application and have a ton of fun, and that you will provide us with feedback about your experience.

![Logo](data:image/png;base64,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/cgjj8wOP/zw6PtCb1hppZWyu+++O/TyN113ySWXZFtttVXSvd4kAQmMDQEFbg3cBwlcrK+XX355xiSJqB0LQdurmVh9//znPytw/z8ShhbcKVE7itSGm0GVMqZHgYuIXHLJJbNHH300afbaYostsssuuyzp3kE38cG+6KKLJonv5ZdfPrvrrrumcfcZVGbI31kJm3feebM//elPIZe/6ZoZZ5wxe/bZZ/NVL5MEJDB+CChwa+irXgIXYXvKKadkp556au5qMIxJgTtlab0z/Ffo74o+HW+WzyqicpjunR4FLm0+5JBDsuOOOy5pSplrrrmyp556Kndtqjudc8452a677pqULfX51a9+lb3vfe9Lur/fTRMnTsxWW221pHzXXnvt7MYbb2xEeCdVyJskIIEgAgrcIEz9L+omcHFD2HnnnbMXXnihhhKay0KBq8AtRtcwCdfQukyvAvfee+/NlltuueSJ4aGHHsqWWGKJ5Pt73bjppptmEyZMSM4XyzIW5rrTUUcdlR1xxBFJ2Z599tnZLrvsknSvN0lAAmNHQIFbA/tOl4NjjjkmeTKtoTpRWShwFbgK3PrcMjofviY2mVHG3//+99zX9bnnnot63ouLTz755Gy//fZLurfXTdTpAx/4QNIGsyJP/Fxx5ao7rbHGGtltt90Wne3b3va23KqM1dskAQmMLwIK3Br6qyxwDzjggOykk06qIdd2slDgKnAVuONP4NJnu+++e8ZJaSlp3XXXzW644YaUW3veQ/SEpZdeulKeuCfgPoHfa12JSDVzzz13kpvYyiuvnN1+++26J9TVGeYjgRYJKHBrgF0I3AsvvDDbcccda8ixvSwUuApcBe74FLg33XRT9qlPfSppsiB8IBunCCtYV/ra176W8YFfNd13333ZMsssUzWbqfezsXeFFVZIyo/9E/vss0/Svd4kAQmMLQEFbg38EbjEpmTJEGvBeEoKXAWuAnd8ClwiAnzwgx/M/vCHPyRNOYQqxEJZV1prrbWyW2+9tXJ2hAojZFhd6fjjj88OOuig6OzYOIo1ef7554++1xskIIGxJ6DAraEPELjsHD7vvPNqyK3dLBS4ClwF7vgUuPTb5z73uex73/te0qRx6KGHZkcffXTSvZ03ESUG/9s6osVgvb3nnntqcwvAyo21OzZx8AT16DwQJzYfr5eABMaGgAK3Bu6v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)



## Link to website

https://soundwave-acwik.ondigitalocean.app/


## Authors

- [@MakAlijevic](https://github.com/MakAlijevic)

- [@eminasirbubalo](https://github.com/eminasirbubalo)


## Documentation

Documentation available @ https://soundwave-acwik.ondigitalocean.app/rest/docs
