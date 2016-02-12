battwitter
=============

![コウモリ](/assets/dest/images/bat-icon.png)

## 環境

node v5.1.1

`gulp`でlocalhost:3000にサーバー。

`$ rails s`でサーバー立ち上げ。

`$ rake db:migrate`
`/.env`に、BATTWITTER_DATABASE_USERNAME / BATTWITTER_DATABASE_PASSWORDに変数設定する（カンマなし）

`rbenv exec bundle exec foreman start`でrailsアプリとnpm startを同時に実行
