# README
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true|
|email|string|null: false, unique: true|

### association
- has_many :messages
- has_many :members
- has_many :groups, through: :members


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|text|
|user|references|foreign_key: true|
|group|references|foreign_key: true|

### association
- belongs_to :user
- belongs_to :group


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|user|references|foreign_key: true|

### association
- has_many :messages
- has_many :members
- has_many :users, through: :members


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|foreign_key: true|
|group|references|foreign_key: true|

### association
- belongs_to :user
- belongs_to :group
