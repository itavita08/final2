package io.deep.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import com.sun.istack.NotNull;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@RequiredArgsConstructor
@Builder
@Entity
@DynamicInsert
@Table(name = "secret_friends")
public class SecretFriendsEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "secret_friend_id")
	private int secretFriendId;
	
	@Column(name = "secret_board")
	@NotNull
	private String secretBoard;
	
	@Column(name = "state")
	private String state;
	
	@ManyToOne(targetEntity = HostUserEntity.class)
	@JoinColumn(name = "host_id")
	@NotNull
	private HostUserEntity hostId;
	
	@ManyToOne(targetEntity = GuestUserEntity.class,
			   fetch = FetchType.LAZY)
	@JoinColumn(name = "guest_id")
	@NotNull
	private GuestUserEntity guestId;
}
