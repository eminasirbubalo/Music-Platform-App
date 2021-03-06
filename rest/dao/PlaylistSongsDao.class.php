<?php

require_once __DIR__.'/BaseDao.class.php';

class PlaylistSongsDao extends BaseDao{

    public function __construct(){
      parent::__construct("playlist_songs");
    }
//get songs
    public function get_songs_by_playlistID($playlistID){
      return $this->query("SELECT playlist.name,song.id,song.title,song.cover,song.path,song.duration FROM playlist_songs INNER JOIN song ON playlist_songs.songID=song.id INNER JOIN playlist ON playlist.id=playlist_songs.playlistID where playlistID= :playlistID;", ['playlistID' => $playlistID]);
    }


}
?>
